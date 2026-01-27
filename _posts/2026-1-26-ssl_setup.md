---
layout: post
title: Setup SSL for HTTPS
date: 2026-01-18 00:51:00
description: Setup SSL for HTTPS
# tags: random
# categories: random
thumbnail: assets/img/12.jpg
---

# Introduction
This is a tutorial on how to setup the ssl certification to enable https for a website

#### **Step1 - Setup DNS Forwarding**

Add direct forwarding to DNS. Here we use `agent` as example. We add a subdomain to `quant-speed.com` so the link is `agent.quant-speed.com`.
<div class="row mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid 
           loading="eager"
           path="assets/img/ali_dns_panel.png"
           class="rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The DNS panel for configuration (Aliyun example).
</div>

#### **Step2 - Initial nginx setup**
After nginx installation, in the directory `/etc/nginx/conf.d`, create `agent.quant-speed.com.conf` with

```
server {
    listen 80;                                  # 80 is http port
    server_name agent.quant-speed.com;          # target url

    # Allow Let's Encrypt to verify domain ownership
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/letsencrypt;  # webroot directory for verification
        try_files $uri =404;
    }

    # Proxy other requests to backend service
    location / {
        proxy_pass http://localhost:8589;       # port to forward to
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

check if the config is correct with `nginx -t`  
restart to check if it works `sudo systemctl restart nginx`

#### **Step3 - Setup SSL**
Install acme.sh

```bash
git clone https://github.com/acmesh-official/acme.sh.git
cd ./acme.sh
./acme.sh --install -m my@example.com
```

Make a directory for acme to challenge
```bash
# Create directory and set owner to www-data (recommended)
sudo mkdir -p /var/www/letsencrypt
sudo chown -R www-data:www-data /var/www/letsencrypt
sudo chmod -R 755 /var/www/letsencrypt
```

Create directory for SSL certificates
```bash
sudo mkdir -p /etc/nginx/tls/agent
```

Apply for the SSL
```bash
# change `agent.quant-speed.com` to target url
# After installation, acme.sh is typically at ~/.acme.sh/acme.sh
~/.acme.sh/acme.sh --issue -d agent.quant-speed.com --webroot /var/www/letsencrypt
```

It is a success if you see:
```
/gT2UalfrnC37aJu0bHy1BWQgGy2uuI2KDAjBgNVHREEHDAaghh4aWFvdGFpLnRh
bmdsZWR1cC1haS5jb20wCgYIKoZIzj0EAwMDaQAwZgIxAP/pcT9+4yh/IVfYoZ66
tDCOA8Pz/XfQCDTfhHb4kEpgToJSisFsT13n2jMvxCj3bQIxAM/O1CA0HAB8LbWS
AfBade7OOyXxEsAwCIzairGq2jMSzZGhiTT3vvyZ4DuV/9dd+g==
-----END CERTIFICATE-----
```

Install the key. Critical Notes
- **update agent.quant-speed.com to target url**
- **that `agent` in `--fullchain-file`**


```bash
~/.acme.sh/acme.sh --install-cert -d agent.quant-speed.com \
  --key-file /etc/nginx/tls/agent/key.pem \
  --fullchain-file /etc/nginx/tls/agent/cert.pem \
  --reloadcmd "service nginx force-reload"
sudo chown www-data:www-data /etc/nginx/tls/agent/*.pem
sudo chmod 600 /etc/nginx/tls/agent/*.pem  # Ensure only owner can read/write
```

#### **Step4 - Update config with SSL**

Update `/etc/nginx/conf.d/agent.quant-speed.com.conf` to redirect HTTP to HTTPS and add HTTPS server block:

```
# HTTP server block - redirects to HTTPS except for Let's Encrypt verification
server {
    listen 80;
    server_name agent.quant-speed.com;
    
    # Allow Let's Encrypt to verify domain ownership (needed for renewals)
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/letsencrypt;
        try_files $uri =404;
    }
    
    # Redirect all other HTTP traffic to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# HTTPS server block
server {
    listen 443 ssl http2;                                   # HTTPS 
    server_name agent.quant-speed.com;                      # update to target url

    # SSL certificate paths
    ssl_certificate     /etc/nginx/tls/agent/cert.pem;
    ssl_certificate_key /etc/nginx/tls/agent/key.pem;

    # Proxy configuration (same as HTTP block)
    location / {
        proxy_pass http://localhost:8589;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

check if the config is correct with `nginx -t`  
restart to check if it works `sudo systemctl restart nginx`  

YOU ARE DONE!