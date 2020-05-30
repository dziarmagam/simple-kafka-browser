projectPath="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
"$projectPath"/build-and-copy-ui.sh
"$projectPath"/package.sh
tar cvzf simple-kafka-browser.tar.gz bin
echo "Done"
