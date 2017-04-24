var fs = require("fs");

var titleRE = /\#\#[\s]*(.*)/;
var linkRE = /\[([^\]]+)\]\(([^\)]+)\)/;

var linkPre = "http://cn.cocos2d-x.org/article/index?type=cocos2d-x&url=/doc/cocos-docs-master/manual/framework/cocos2d-js/catalog/";

var header = fs.readFileSync("./header", {encoding: "utf8"});
var footer = fs.readFileSync("./footer", {encoding: "utf8"});

fs.readFile('./cocos2d-js.md', {encoding: "utf8"}, function (err, content) {
    if (err) throw err;
  
    var lines = content.split("\n");
    var line = "", result, chapter, links, current, link, name;
    var formatted = [];
    for (var i = 0; i < lines.length; ++i) {
        line = lines[i];
        result = titleRE.exec(line);
        if (result) {
            current = [];
            formatted.push({
                title: result[1],
                links: current
            });
            
            continue;
        }
        
        result = linkRE.exec(line);
        if (result) {
            name = result[1];
            link = result[2];
            current.push({
                name: name,
                link: link
            });
        }
    }
    
    var output = "";
    for (var i = 0; i < formatted.length; ++i) {
        chapter = formatted[i];
        links = chapter.links;
        output += "\t<h1 class='page-header'>" + chapter.title + "</h1>\n";
        output += "\t<p>\n";
        for (var j = 0; j < links.length; ++j) {
            link = links[j];
            output += '\t\t<a href="' + linkPre + link.link + '" class="btn btn-lg btn-outline">' + link.name + '</a>\n';
        }
        output += "\t</p>\n";
    }
    
    output = header + output + footer;
    
    fs.writeFile("./index.html", output);
});