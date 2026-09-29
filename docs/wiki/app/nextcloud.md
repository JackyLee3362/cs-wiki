---
title: Nextcloud
date: 2026-08-29T18:04:53+08:00
draft: true
author: JackyLee
tags:
  - app/server
categories:
comment: true
---

- 服务器仓库: [nextcloud/server: ☁️ Nextcloud server, a safe home for all your data](https://github.com/nextcloud/server)

## docker-compose

- [nextcloud/docker: A community maintained docker micro-image for deploying Nextcloud on container platforms](https://github.com/nextcloud/docker#running-this-image-with-docker-compose)

## aio-docker-compose

- [all-in-one/compose.yaml at main · nextcloud/all-in-one](https://github.com/nextcloud/all-in-one/blob/main/compose.yaml)

## 禁用的应用

```sh
docker compose exec -it -u www-data app php occ app:disable activity
docker compose exec -it -u www-data app php occ app:disable collaborative_tags
docker compose exec -it -u www-data app php occ app:disable comments
docker compose exec -it -u www-data app php occ app:disable dashboard
docker compose exec -it -u www-data app php occ app:disable federation
docker compose exec -it -u www-data app php occ app:disable file_reminders
docker compose exec -it -u www-data app php occ app:disable files_download_limit
docker compose exec -it -u www-data app php occ app:disable first_run_wizard
docker compose exec -it -u www-data app php occ app:disable log_reader
docker compose exec -it -u www-data app php occ app:disable monitoring
docker compose exec -it -u www-data app php occ app:disable nextcloud_webhook
docker compose exec -it -u www-data app php occ app:disable nextcloud_announcements
docker compose exec -it -u www-data app php occ app:disable photos
docker compose exec -it -u www-data app php occ app:disable recommendations
docker compose exec -it -u www-data app php occ app:disable related_resources
docker compose exec -it -u www-data app php occ app:disable sharebymail
docker compose exec -it -u www-data app php occ app:disable support
docker compose exec -it -u www-data app php occ app:disable teams
docker compose exec -it -u www-data app php occ app:disable privacy
docker compose exec -it -u www-data app php occ app:disable updatenotification
docker compose exec -it -u www-data app php occ app:disable usagesurvey
docker compose exec -it -u www-data app php occ app:disable user_status
docker compose exec -it -u www-data app php occ app:disable weather_status
docker compose exec -it -u www-data app php occ app:disable versions
docker compose exec -it -u www-data app php occ app:disable teams
docker compose exec -it -u www-data app php occ app:disable usagesurvey
```

## 优化方案

- [nextcloud性能优化 - tlanyan](https://itlanyan.com/optimize-nextcloud/)

## FAQ

### 关于 nextcloud

- [nextcloud的体验怎么样 - 搞七捻三 - LINUX DO](https://linux.do/t/topic/1345448)
- [简要分析一下cloudreve与nextcloud(owncloud)这两款网盘程序 – 阳光实验室](https://www.zzygx.cc/?p=80)
