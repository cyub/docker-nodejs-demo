## 实验1. 原生创建容器实验

```bash
 sudo docker run --name mongo -d mongo:3.6 // 创建mongo容器

sudo docker run  -p 6530:4000  --link mymongo:mongo --name hapi -d  hapi // 创建hapi项目容器
```

## 实验2. 使用docker-compose创建容器实验

### 安装docker-compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
docker-composer -h
```

### 启动

```bash

sudo docker-compose up -d
sudo docker-compose ps
sudo docker-compose down
```

### 多容器伸缩处理
```bash
sudo docker-compose -f docker-compose-v2.yaml up -d

// 访问ip:8080
// 访问hapi.local

// 增加2台容器
sudo docker-compose -f docker-compose-v2.yaml scale hapi=3
```