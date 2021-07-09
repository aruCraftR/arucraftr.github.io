cd js
set jar="%~dp0/closure-compiler.jar"
if not exist scrollreveal.min.js java -jar %jar% -O SIMPLE scrollreveal.js --js_output_file scrollreveal.min.js
if not exist general.min.js java -jar %jar% -O SIMPLE general.js --js_output_file general.min.js
if not exist refresh.min.js java -jar %jar% -O SIMPLE refresh.js --js_output_file refresh.min.js
if not exist 404.min.js java -jar %jar% -O SIMPLE 404.js --js_output_file 404.min.js
if not exist common.min.js java -jar %jar% -O SIMPLE common.js --js_output_file common.min.js
if not exist gallery.min.js java -jar %jar% -O SIMPLE gallery.js --js_output_file gallery.min.js
if not exist live2D-config.min.js java -jar %jar% -O SIMPLE live2D-config.js --js_output_file live2D-config.min.js
if not exist announcement.min.js java -jar %jar% -O WHITESPACE_ONLY announcement.js --js_output_file announcement.min.js
if not exist players.min.js java -jar %jar% -O SIMPLE players.js --js_output_file players.min.js
if not exist init.min.js java -jar %jar% -O SIMPLE init.js --js_output_file init.min.js
if not exist ie-detect.min.js java -jar %jar% -O SIMPLE ie-detect.js --js_output_file ie-detect.min.js
if not exist get-minecraft-server.min.js java -jar %jar% -O SIMPLE get-minecraft-server.js --js_output_file get-minecraft-server.min.js
pause