up:
	@docker compose up --build

down:
	@docker compose down -v

sql.export:
	@docker exec mysql-container mysqldump -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE > dump.sql
	@echo "✅ Dump exporté dans dump.sql"


sql.import:
	@docker exec -i mysql-container mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE < dump.sql
	@echo "✅ Dump importé dans la base de données"

list-db:
	@docker exec mysql-container mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD -e "SHOW DATABASES;"


logs-api:
	@docker logs -f graphql-api

logs-db:
	@docker logs -f mysql-container

migrate:
	@docker compose exec api npx prisma migrate dev --name init

reset-db:
	@docker compose exec api npx prisma migrate reset --force
