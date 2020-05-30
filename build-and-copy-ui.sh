projectPath="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$projectPath"/kafka-browser-ui
ng build
echo "Coping ui resources"
cp "$projectPath"/kafka-browser-ui/dist/kafka-monitor/* "$projectPath"/kafka-browser-api/src/main/resources/static/
