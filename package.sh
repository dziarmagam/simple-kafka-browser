projectPath="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$projectPath"/kafka-browser-api
mvn package spring-boot:repackage
echo "Coping binaries"
cp "$projectPath"/kafka-browser-api/target/kafka-browser*.jar "$projectPath"/bin/