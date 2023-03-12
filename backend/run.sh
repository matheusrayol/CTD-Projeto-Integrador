mvn clean install

export DB_MYSQL_USER=""
export DB_MYSQL_PASSWORD=""
export DB_URI="mysql://urldb:3306/nomedb?createDatabaseIfNotExist=true&useTimezone=true&serverTimezone=UTC"

java -jar target/notcars-0.0.1-SNAPSHOT.jar