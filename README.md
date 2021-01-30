# Spirit-Smoke Repository

## Разработка

### Быстрый старт

Для выполнения всех команд для запуска проекта достаточно в корне выполнить:

```bash
docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml build # один раз и потом только после изменений конфигов докера
sudo ./start.dev.server.sh
```

### Docker-Compose

Для запуска докера в режмие разработки нужно в корне проекта ввести команду:

```bash
docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml build
docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml up
```

После этого запустятся сервера с базой данных. Порты смотреть в конфигах docker-compose.

### Используем bash

Подключение к контейнеру для выполнения команд (например установка пакетов):

```bash
docker container ps # находим нужный id
./exec.docker.sh <container id>
yarn add ...
```

## Проблемы

### WSL

* При разработке с использованием WSL 2, вместо localhost нужно использовать ip адрес WSL, т.к. WSL является hyper-v контейнером. Получить его можно так (внутри WSL):

```bash
ip addr | grep eth0
```

* Для разработки с использованием докера в vscode нужно подключать проект через WSL-extension, чтобы не было проблем с чувствительностью к регистру.

## Gitlab CI

### Инициализация сервера

1. Ставим Докер - <https://docs.docker.com/engine/install/ubuntu/>

2. Устанавливаем Runner (<https://docs.gitlab.com/runner/install/docker.html>):

    ```bash
    docker run -d --name gitlab-runner --restart always \
        -v /srv/gitlab-runner/config:/etc/gitlab-runner \
        -v /var/run/docker.sock:/var/run/docker.sock \
        gitlab/gitlab-runner:latest
    ```

3. При обновлении конфига раннера (`/srv/gitlab-runner/config`), запускаем команду:

    ```bash
    docker restart gitlab-runner
    ```

4. Регистрируем раннер - <https://docs.gitlab.com/runner/register/index.html#docker>:

    ```bash
    docker run --rm -it -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register -n \
      --url https://gitlab.com/ \
      --registration-token <TOKEN> \
      --executor docker \
      --description "[PROD]: Description" \
      --docker-image "docker:19.03.12" \
      --docker-privileged \
      --docker-volumes "/certs/client"
    ```

5. Дорабатываем конфиг:

    ```bash
      nano /srv/gitlab-runner/config/config.toml
    ```

    ```toml
      volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
    ```
