
src =  "./src/"
dist =  "./public/"
asset =  "assets/"
srcHtmlDir = ''
htmlDir = ''
srcCssDir = 'css/'
cssDir = 'css/'
srcJsDir = 'js/'
jsDir = 'js/'
libDir = 'libs/'

dir =
    src:
        root: src
        html: src + srcHtmlDir
        css: src + srcCssDir
        js: src + srcJsDir
    dist:
        root: dist
        html: dist + htmlDir
        css: dist + asset + cssDir
        js: dist + asset + jsDir
        lib: dist + asset + libDir


