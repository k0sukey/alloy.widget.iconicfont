## alloy.widget.iconicfont
[TiIconicFont](https://github.com/k0sukey/TiIconicFont) on Alloy widget.

### Usage
* Copy to [wigets](https://github.com/k0sukey/alloy.widgets.iconicfont/tree/master/app/widgets) files your Alloy project.
* Create folder app/assets/fonts and copy to font files app/assets/fonts/*.ttf
* Edit tiapp.xml

```
<ios>
    <plist>
        <dict>
            <key>UIAppFonts</key>
            <array>
                <string>/fonts/fontawesome-webfont.ttf</string>
                <string>/fonts/LigatureSymbols.ttf</string>
                <string>/fonts/ss-pika.ttf</string>
            </array>
        </dict> 
    </plist>
</ios>
```

* Add [config.json](https://github.com/k0sukey/alloy.widgets.iconicfont/blob/master/app/config.json) dependencies.

```
"dependencies": {
    "be.k0suke.fontawesome": "1.0",
    "be.k0suke.ligaturesymbols": "1.0",
    "be.k0suke.sspika": "1.0"
}
```
* Edit [view](https://github.com/k0sukey/alloy.widgets.iconicfont/blob/master/app/views/index.xml) and [style](https://github.com/k0sukey/alloy.widgets.iconicfont/blob/master/app/styles/index.tss)

index.xml

```
<Widget class="icon" icon="icon-github" src="be.k0suke.fontawesome"/>
<Widget class="icon" icon="hatena" src="be.k0suke.ligaturesymbols"/>
<Widget class="icon" icon="notifications disabled" src="be.k0suke.sspika"/>
```

index.tss

```
'.icon': {
	top: 20,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	color: '#333',
	shadowColor: '#fff',
	shadowOffset: {
		x: 0.0,
		y: 1.0
	},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 60
	},
	touchEnabled: false
}
```

## License
The MIT License (MIT) Copyright (c) 2013 Kosuke Isobe

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits
* Font Awesome by Dave Gandy http://fortawesome.github.com/Font-Awesome
* Ligature Symbols by Kazuyuki Motoyama https://github.com/kudakurage/LigatureSymbols