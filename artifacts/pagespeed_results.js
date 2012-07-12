// API callback
runPagespeedCallbacks({
 "kind": "pagespeedonline#result",
 "id": "http://www.globo.com/",
 "responseCode": 302,
 "title": "globo.com - Absolutamente tudo sobre notícias, esportes e entretenimento",
 "score": 87,
 "pageStats": {
  "numberResources": 172,
  "numberHosts": 19,
  "totalRequestBytes": "28229",
  "numberStaticResources": 150,
  "htmlResponseBytes": "33123",
  "textResponseBytes": "142346",
  "cssResponseBytes": "357493",
  "imageResponseBytes": "999070",
  "javascriptResponseBytes": "597207",
  "otherResponseBytes": "1695",
  "numberJsResources": 22,
  "numberCssResources": 5
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "AvoidCharsetInMetaTag": {
    "localizedRuleName": "Avoid a character set in the meta tag",
    "ruleScore": 85,
    "ruleImpact": 1.0,
    "urlBlocks": [
     {
      "header": {
       "format": "The following resources have a character set specified in a meta tag. Specifying a character set in a meta tag disables the lookahead downloader in IE8. To improve resource download parallelization, move the character set to the HTTP Content-Type response header."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://vitrines.globo.com/vitrine/shop/5/globocom/home.html?ss=globocom/home&url=&sw=940&sh=347&sps=5&sts=5&color_text=0669de"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "AvoidCssImport": {
    "localizedRuleName": "Avoid CSS @import",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "AvoidExcessSerialization": {
    "localizedRuleName": "Reduce request serialization",
    "ruleScore": 0,
    "ruleImpact": 24.0,
    "urlBlocks": [
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=4907981&PluID=0&ord=[timestamp]&rtu=-1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/js/oas_flash_2009.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_lx.ads/globo.com/globo.com/home/L24/1881743806/Top1/globocom/vivo_087_155_loja_120601/VIVO_SVA_TORPEDORECADO_GLOBO_HOMEPAGE_SLIMBANNER.htm/536e327957302f7a56434941436d7849?_RM_EMPTY_&"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/default/empty.gif"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/globocom/ibm_459_100_ibm_120601/logo_IBM_65x30-v2.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/js/oas_flash_2009.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/js/oas_flash_float_2011.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/__utm.gif?utmwv=5.3.3&utms=1&utmn=1337364826&utmhn=www.globo.com&utmcs=UTF-8&utmsr=1024x768&utmvp=1024x768&utmsc=24-bit&utmul=en&utmje=0&utmfl=-&utmdt=globo.com%20-%20Absolutamente%20tudo%20sobre%20not%C3%ADcias%2C%20esportes%20e%20entretenimento&utmhid=806645568&utmr=-&utmp=%2F&utmac=UA-296593-15&utmcc=__utma%3D100629313.1965203812.1341346848.1341346848.1341346848.1%3B%2B__utmz%3D100629313.1341346848.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%3B&utmu=qBAg~"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/ga.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/__utm.gif?utmwv=5.3.3&utms=1&utmn=1666360462&utmhn=www.globo.com&utmcs=UTF-8&utmsr=1024x768&utmvp=1024x768&utmsc=24-bit&utmul=en&utmje=0&utmfl=-&utmdt=globo.com%20-%20Absolutamente%20tudo%20sobre%20not%C3%ADcias%2C%20esportes%20e%20entretenimento&utmhid=806645568&utmr=-&utmp=%2F&utmac=UA-296593-2&utmcc=__utma%3D10109875.1756984846.1341346848.1341346848.1341346848.1%3B%2B__utmz%3D10109875.1341346848.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%3B&utmu=qB~"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/ga.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/__utm.gif?utmwv=5.3.3&utms=1&utmn=2120214407&utmhn=vitrines.globo.com&utmcs=UTF-8&utmsr=1024x768&utmvp=940x347&utmsc=24-bit&utmul=en&utmje=0&utmfl=-&utmhid=498186827&utmr=http%3A%2F%2Fwww.globo.com%2F&utmp=%2Fvitrine%2Fshop%2F5%2Fglobocom%2Fhome.html%3Fss%3Dglobocom%2Fhome%26url%3D%26sw%3D940%26sh%3D347%26sps%3D5%26sts%3D5%26color_text%3D0669de&utmac=UA-156625-18&utmcc=__utma%3D47268664.603883849.1341346849.1341346849.1341346849.1%3B%2B__utmz%3D47268664.1341346849.1.1.utmcsr%3Dglobo.com%7Cutmccn%3D(referral)%7Cutmcmd%3Dreferral%7Cutmcct%3D%2F%3B&utmu=qF~"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/ga.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.globo.com/RealMedia/ads/adstream_mjx.ads/globo.com/globo.com/home/1629489586@Bottom1,Bottom2,Bottom3,Middle,Frame1,Top1,x31,x32,x33,x40,x41?"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.g1.globo.com/tempo/cidade-resumida/sp/sao-paulo.jsonp?callback=g1_previsao_cidade"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/clickon.jsonp?callback=libbyJSONPCallback_libbyWidgetClickon"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://b.scorecardresearch.com/p?c1=2&c2=6035227&ns__t=1341346848354&ns_c=UTF-8&c8=globo.com%20-%20Absolutamente%20tudo%20sobre%20not%C3%ADcias%2C%20esportes%20e%20entretenimento&c7=http%3A%2F%2Fwww.globo.com%2F&c9="
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://rt.globo.com/pv.gif?location=http%3A%2F%2Fwww.globo.com%2F&from=-&title=-&site=home&categories=portal&newsession=1&elapsedtime=0&expirationTime=5&convergedRegions=0&ts=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/bu/rt/js/glb-rt-min.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/etc/busca/js/jquery.buscaPadrao.v2.compressed.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_personalizaveis/noticias2/img/flags.png?d8e3b5d86cd8"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_personalizaveis/times2/img/times.jpg?d8e3b5d86cd8"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/37I9_s6Lgz23jltSN6AyJCIkE6IEaJ9AmZwVLpvk6mX2mgFpSSDRGxst9XnaptCK/s2.glbimg.com/oetzbC9r0rMy5Ku6cWuy5PwcmN4aP_0iJUrXX5QiKDb3mzL0U3QNFGKybYArSCiNJnD8KicQSAWLToTNVd4ygA==/s.glbimg.com/et/nv/f/original/2012/07/02/jorginho_carminha.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/7kCKdE4qjz4UmH-pmBNHRQ4COnBkHJr9Ocbeuw54ChkC_mVYZ7-AZwDADK7SU5Qo/s2.glbimg.com/Q-4IBi2eLP9E4w8SUJqLhBVBADX9f6TJN53T5THMxHs9ty3jlL1gvhoQ0Fuk2NkoJHJRx1-hiAnkMKUXPaupFg==/s.glbimg.com/en/ho/f/original/2012/07/03/mae.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/ZfBLoV-O569bZJsZYBL5tlyhuzv1LNrW0rcaDZPnm3_6Gv_1cl3v6kO87QOkbCt6/s2.glbimg.com/KXRYJ3Q8Mao6DxJgSRDcBouPnE1VXJ26fzCDgLAiKRnqmT8pFoqS-33qmUXjAAwfqsXAqEhbHTQxvtq-fq3Vcw==/s.glbimg.com/es/ge/f/original/2012/07/03/encaradaandersonsilva-ufc148-adrianocaldas-21024.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/bYJWg3zLME14Gu83QnMB1wTtxROUcs3UtQ3lT5cOwHnf6iInCliqjxSOWjMHlsDv/s2.glbimg.com/HhikCieWIVeZ69TCjFsNT-suN_AaiwEpODeSFOG3MdZiE4cC4RL4zLPf4Llj-FUnSWOTpTwBV1pf0IvRSB0p9Q==/s.glbimg.com/es/ge/f/original/2012/07/03/torcedoresbocafestaaeroporto_diegoribeiro.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/q3SW0IX3bVfv4KnCZuI7lusQuFxFy8Xu_xTPukyX86O7i06_3Bl9c_JKj5oK6Zav/s2.glbimg.com/kFmLI1t_UQu6oxHSOx0Vge3nI0F2RhAZrp8lshS6eBrA1dfZ6HJZ79cwjfzN2EUZZNQ1izCz649QTrWz7X5thA==/s.glbimg.com/jo/g1/f/original/2012/07/03/grota_italia.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yHvDwo-JzCHVrCW9LWmHFcNL5NkVSAUhKzrmteL1JmzOBrJztMhifjZe-fl1Td1A/s2.glbimg.com/8WkU1u5CIQ2WBtYQJjB4Nezmg4vsiTa_UAZ3r0fdteCbsKXCiGl9DFL5Ixcdfa3BUr5nV_PgO0izrHMCpqV14w==/s.glbimg.com/jo/g1/f/original/2012/07/03/tmobile.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following requests are serialized. Try to break up the dependencies to make them load in parallel."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/ga.js"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://www.globo.com/"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "AvoidLongRunningScripts": {
    "localizedRuleName": "Avoid long-running scripts",
    "ruleScore": 100,
    "ruleImpact": 0.0,
    "urlBlocks": [
     {
      "header": {
       "format": "The following URLs run JavaScript that blocks the UI for a long time. To improve browser responsiveness, optimize the JavaScript or split it up using callbacks."
      },
      "urls": [
       {
        "result": {
         "format": "$1 line $2 ($3)",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          },
          {
           "type": "DURATION",
           "value": "0.3 seconds"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "DeferParsingJavaScript": {
    "localizedRuleName": "Defer parsing of JavaScript",
    "ruleScore": 97,
    "ruleImpact": 0.5503600000000001,
    "urlBlocks": [
     {
      "header": {
       "format": "$1 of JavaScript is parsed during initial page load. Defer parsing JavaScript to reduce blocking of page rendering.",
       "args": [
        {
         "type": "BYTES",
         "value": "53.7KiB"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/vitrine/js/jquery-1.3.2.min.js"
          },
          {
           "type": "BYTES",
           "value": "51KiB"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/vitrine/js/widget-shopping.js"
          },
          {
           "type": "BYTES",
           "value": "2.4KiB"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2 of inline JavaScript)",
         "args": [
          {
           "type": "URL",
           "value": "http://vitrines.globo.com/vitrine/shop/5/globocom/home.html?ss=globocom/home&url=&sw=940&sh=347&sps=5&sts=5&color_text=0669de"
          },
          {
           "type": "BYTES",
           "value": "276B"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "EliminateUnnecessaryReflows": {
    "localizedRuleName": "Eliminate unnecessary reflows",
    "ruleScore": 0,
    "ruleImpact": 0.08,
    "urlBlocks": [
     {
      "header": {
       "format": "JavaScript that executed in the following resources caused unnecessary reflows. To reduce page render time, modify the JavaScript so it does not cause a reflow:"
      },
      "urls": [
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js"
          },
          {
           "type": "INT_LITERAL",
           "value": "61"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "20"
           },
           {
            "type": "INT_LITERAL",
            "value": "20"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:239:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         w @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "7"
           },
           {
            "type": "INT_LITERAL",
            "value": "11"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:195:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:195:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:195:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "8"
           },
           {
            "type": "INT_LITERAL",
            "value": "9"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "6"
           },
           {
            "type": "INT_LITERAL",
            "value": "9"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:273:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:273:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:273:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:289:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "5"
           },
           {
            "type": "INT_LITERAL",
            "value": "8"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:195:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:195:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:195:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "INT_LITERAL",
            "value": "4"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:273:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:273:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:279:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:290:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "3"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:253:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "3"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:41:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:41:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:42:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:35:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:49:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:49:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:48:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:48:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:45:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:44:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         w @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:80:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:76:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:244:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:244:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:244:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:244:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:255:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:253:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:233:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:234:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:253:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:253:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:129:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:182:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:181:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:78:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:76:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:253:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:251:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:15:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:22:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:94:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:185:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:41:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:1:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          },
          {
           "type": "INT_LITERAL",
           "value": "3"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:223:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://api.globo.com/geo?_time=1341346848354:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:258:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://api.globo.com/geo?_time=1341346848354:1:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:256:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:256:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:256:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:263:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:188:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:262:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:187:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:258:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://api.globo.com/geo?_time=1341346848354:1:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://c.api.globo.com/novelas/avenida-brasil.jsonp"
          },
          {
           "type": "INT_LITERAL",
           "value": "3"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "INT_LITERAL",
            "value": "4"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:194:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://c.api.globo.com/soccer/portuguesa.jsonp"
          },
          {
           "type": "INT_LITERAL",
           "value": "3"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "INT_LITERAL",
            "value": "4"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:194:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:29:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:29:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/finance.jsonp?_=1341346848354"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "5"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:230:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://c.api.globo.com/news/SP.jsonp"
          },
          {
           "type": "INT_LITERAL",
           "value": "3"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack (executed $1 times) caused reflows that took $2 milliseconds: $3",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "INT_LITERAL",
            "value": "3"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:4:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:194:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:190:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:191:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/horoscope/cancer/summary.jsonp?_=1341346848354"
          },
          {
           "type": "INT_LITERAL",
           "value": "3"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:234:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:234:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:239:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:237:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:237:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:239:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         },
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:234:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:234:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:239:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/round/brasileirao/7.jsonp?_=1341346848354"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n         g @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:3:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:264:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:263:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:265:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:2:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/267143c2f15d.js:28:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/ga.js"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "2"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://www.google-analytics.com/ga.js:17:0\n           @ http://www.google-analytics.com/ga.js:25:0\n           @ http://www.google-analytics.com/ga.js:25:0\n           @ http://www.google-analytics.com/ga.js:16:0\n           @ http://www.google-analytics.com/ga.js:9:0\n           @ http://www.google-analytics.com/ga.js:9:0\n           @ http://www.google-analytics.com/ga.js:38:0\n           @ :0:0"
           }
          ]
         }
        ]
       },
       {
        "result": {
         "format": "$1 ($2 reflows)",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        },
        "details": [
         {
          "format": "The following JavaScript call stack caused a reflow that took $1 milliseconds: $2",
          "args": [
           {
            "type": "INT_LITERAL",
            "value": "1"
           },
           {
            "type": "VERBATIM_STRING",
            "value": "           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0\n           @ http://s.glbimg.com/en/ho/static/CACHE/js/567cb1205783.js:1:0"
           }
          ]
         }
        ]
       }
      ]
     }
    ]
   },
   "EnableGzipCompression": {
    "localizedRuleName": "Enable compression",
    "ruleScore": 97,
    "ruleImpact": 2.8109,
    "urlBlocks": [
     {
      "header": {
       "format": "Compressing the following resources with gzip could reduce their transfer size by $1 ($2 reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "27.5KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "86%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://vitrines.globo.com/vitrine/shop/5/globocom/home.html?ss=globocom/home&url=&sw=940&sh=347&sps=5&sts=5&color_text=0669de"
          },
          {
           "type": "BYTES",
           "value": "27.5KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "86%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "InlineSmallCss": {
    "localizedRuleName": "Inline Small CSS",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "InlineSmallJavaScript": {
    "localizedRuleName": "Inline Small JavaScript",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "LeverageBrowserCaching": {
    "localizedRuleName": "Leverage browser caching",
    "ruleScore": 86,
    "ruleImpact": 10.38638392857143,
    "urlBlocks": [
     {
      "header": {
       "format": "The following cacheable resources have a short freshness lifetime. Specify an expiration at least one week in the future for the following resources:"
      },
      "urls": [
       {
        "result": {
         "format": "$1 (expiration not specified)",
         "args": [
          {
           "type": "URL",
           "value": "http://c.api.globo.com/news/SP.jsonp"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 (expiration not specified)",
         "args": [
          {
           "type": "URL",
           "value": "http://c.api.globo.com/novelas/avenida-brasil.jsonp"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 (expiration not specified)",
         "args": [
          {
           "type": "URL",
           "value": "http://c.api.globo.com/soccer/portuguesa.jsonp"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 (expiration not specified)",
         "args": [
          {
           "type": "URL",
           "value": "http://static.clickon.com.br/sellit-client-http-static/communipons/med/PKITM.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://api.g1.globo.com/tempo/cidade-resumida/sp/sao-paulo.jsonp?callback=g1_previsao_cidade"
          },
          {
           "type": "DURATION",
           "value": "30 seconds"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/default/empty.gif"
          },
          {
           "type": "DURATION",
           "value": "5 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/globocom/ibm_459_100_ibm_120601/logo_IBM_65x30-v2.jpg"
          },
          {
           "type": "DURATION",
           "value": "5 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://musica.com.br/api/artistas/top_artistas/30?callback=callbackMusicaTopArtistas"
          },
          {
           "type": "DURATION",
           "value": "5 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://musica.com.br/api/musicas/top_musicas/3?callback=callbackMusicaTopMusicas"
          },
          {
           "type": "DURATION",
           "value": "5 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/js/oas_flash_2009.js"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/js/oas_flash_float_2011.js"
          },
          {
           "type": "DURATION",
           "value": "10 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/bu/rt/js/glb-rt-min.js"
          },
          {
           "type": "DURATION",
           "value": "30 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://sawpf.com/1.0.js"
          },
          {
           "type": "DURATION",
           "value": "60 minutes"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://www.google-analytics.com/ga.js"
          },
          {
           "type": "DURATION",
           "value": "12 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2020529.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2021488.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022191.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022241.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022689.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023183.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023250.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 ($2)",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023265.jpg"
          },
          {
           "type": "DURATION",
           "value": "24 hours"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MakeLandingPageRedirectsCacheable": {
    "localizedRuleName": "Make landing page redirects cacheable",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "MinifyCss": {
    "localizedRuleName": "Minify CSS",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "MinifyHTML": {
    "localizedRuleName": "Minify HTML",
    "ruleScore": 81,
    "ruleImpact": 0.4122,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following HTML resources could reduce their size by $1 ($2 reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "4KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "13%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://vitrines.globo.com/vitrine/shop/5/globocom/home.html?ss=globocom/home&url=&sw=940&sh=347&sps=5&sts=5&color_text=0669de"
          },
          {
           "type": "BYTES",
           "value": "4KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "13%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleScore": 99,
    "ruleImpact": 0.0649,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2 reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "265B"
        },
        {
         "type": "PERCENTAGE",
         "value": "2%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/vitrine/js/jquery-1.3.2.min.js"
          },
          {
           "type": "BYTES",
           "value": "265B"
          },
          {
           "type": "PERCENTAGE",
           "value": "2%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MinimizeRedirects": {
    "localizedRuleName": "Minimize redirects",
    "ruleScore": 85,
    "ruleImpact": 5.0,
    "urlBlocks": [
     {
      "header": {
       "format": "Remove the following redirect chain if possible:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/clickon.jsonp?callback=libbyJSONPCallback_libbyWidgetClickon"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/clickon.jsonp?callback=libbyJSONPCallback_libbyWidgetClickon"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "Remove the following redirect chain if possible:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/geo?_time=1341346848354"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "Remove the following redirect chain if possible:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/horoscope/cancer/summary.jsonp?_=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/horoscope/cancer/summary.jsonp?_=1341346848354"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "Remove the following redirect chain if possible:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/horoscope/summary.jsonp?_=1341346848354"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.globo.com/horoscope/summary.jsonp?_=1341346848354"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "Remove the following redirect chain if possible:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://b.scorecardresearch.com/p?c1=2&c2=6035227&ns__t=1341346848354&ns_c=UTF-8&c8=globo.com%20-%20Absolutamente%20tudo%20sobre%20not%C3%ADcias%2C%20esportes%20e%20entretenimento&c7=http%3A%2F%2Fwww.globo.com%2F&c9="
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://b.scorecardresearch.com/p2?c1=2&c2=6035227&ns__t=1341346848354&ns_c=UTF-8&c8=globo.com%20-%20Absolutamente%20tudo%20sobre%20not%C3%ADcias%2C%20esportes%20e%20entretenimento&c7=http%3A%2F%2Fwww.globo.com%2F&c9="
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "MinimizeRequestSize": {
    "localizedRuleName": "Minimize request size",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "OptimizeImages": {
    "localizedRuleName": "Optimize images",
    "ruleScore": 76,
    "ruleImpact": 7.920999999999999,
    "urlBlocks": [
     {
      "header": {
       "format": "Optimizing the following images could reduce their size by $1 ($2 reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "73.9KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "26%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/common-sa4da0b5cac.png?7dc2f39ca10c"
          },
          {
           "type": "BYTES",
           "value": "14KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "13%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/Netshoes_sem_Assinatura_vitrine_globo_______________________.jpg"
          },
          {
           "type": "BYTES",
           "value": "11.2KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "68%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_home/widget_base/img/sprite_widgets_home.png?0e1c2d69768a"
          },
          {
           "type": "BYTES",
           "value": "6.1KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "18%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5Wwt8dzt03c2crQhV2GyTTD6ruGMD4opTpVWmtYrI0t3jtWQA3PaDl939SIcX6TCMw==/s2.glbimg.com/bK4sJyzSvD-RALAtJ0Tty8IX613lcqdyNIuBgNDV0kuw06AI6x5SG_wHWUbXl2Hw123OMdNKqOEc0W7Cx0k9Xg==/s.glbimg.com/po/tt/f/original/2012/02/16/nota-da-namorada.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.4KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "69%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5YK8T5Od2eu8Y8RxsRc3HaXHkCo_IpMDxdOvB76uR2bTVdDO9AwOo3xtgQVjTvLYKw==/s2.glbimg.com/wELtcB7oDSp5XGYqnhDY5tpbKXdQUpYTJ79NJ-DuTZ6YqpysOUfb5aKNk-LyBBss6tYmBFBcDWW-pqL5k6-XFA==/s.glbimg.com/es/ge/f/original/2012/05/18/diego_forlan_inter_de_milao.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.4KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "81%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5dHKQZ1E7tA4lzsYrpTPuDM9CAWv9yvaZuT5ahTfnkjZFNmOP9o9Zw-TFtAqnoGvNg==/s2.glbimg.com/XHypc_qbi56R2jYy5DJkY4Ypsm6_Mow6GHWCgjMzdshqlzqjJPD_m-gagkHqNDVUybCMdEud9FXW9pVZ0fuSdg==/s.glbimg.com/po/tt/f/original/2012/06/25/babi_rossi.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.3KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "80%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5Wy89MCVciscocDp-s_snAjpkWASqO3_NH4GPcj6YcAhD8nOjziZ8uw3hZ7hZBrkMA==/s2.glbimg.com/wTScMwAfzkAWWSzreNlYbtvKlMzC_cRJv3YDvENNzM5QdIkoGz0qFpN_xAcl9yd6UpbUGPuVstsHZZ45W4R7Kg==/s.glbimg.com/jo/eg/f/original/2012/07/03/andressa_urach_div.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.3KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "84%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5QMfkJUOuEvrmM0hdSqALy1aF14akBgNiFUn1jXEvZEYesE_qaOY-N8pLEUg7xFXaQ==/s2.glbimg.com/XCdpRCfkQ_rKlbdxip2b3RvwitacEKL9S3wvATrFkPqdSVeMsqncR3-E7n7TvlXmrKsmh4ji5hyDIbyCvq-mtg==/s.glbimg.com/jo/g1/f/original/2012/07/03/madrid_1.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.3KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "83%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5RZdDlcuRBamE4tUcigGxkwQB04eGCKcGuYwEYjv4U-GKwjNHFRYeEKMcyL8_waVnA==/s2.glbimg.com/KSnW8z9Vww-mlVi_U3J6DuB19Db0FV_2xvdtN-jgiwLWqITAaONTpe5qtJ1Bl5uza3L9TYKaerqwNML05aIy5Q==/s.glbimg.com/po/tt/f/original/2012/02/15/diamonds-multiplayer.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.3KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "86%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5Xy9yLfs9TQC7_RbBDMOwU0n_Tp7Z1OyYh9tY0C7zSeAr0ScWGfCvKX-uj79KY73fA==/s2.glbimg.com/sam1KYp9S1pXwbWGHIkMrb4T3j9osHW0xfy1LQFGQFaaoEKmQ4dT4hmlWf3D_EkTU2jS2yoDEtc5FcwMB66U-A==/s.glbimg.com/po/tt/f/original/2012/02/15/rome-puzzle.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.3KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "84%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/GmK7g9M8eJYTm9slYAE3974Z8aA7CwM3bDfdxTlUbpa0f97BA8bJZLdL_JS-B_6j/s.glbimg.com/es/ge/f/original/2012/07/03/ivan_001.jpg"
          },
          {
           "type": "BYTES",
           "value": "3.2KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "53%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/box_previsao_tempo/img/sprite_icones_previsao.png?a4da6f09d6be"
          },
          {
           "type": "BYTES",
           "value": "1.4KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "18%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo.jpg"
          },
          {
           "type": "BYTES",
           "value": "963B"
          },
          {
           "type": "PERCENTAGE",
           "value": "22%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo_.jpg"
          },
          {
           "type": "BYTES",
           "value": "963B"
          },
          {
           "type": "PERCENTAGE",
           "value": "22%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo__.jpg"
          },
          {
           "type": "BYTES",
           "value": "963B"
          },
          {
           "type": "PERCENTAGE",
           "value": "22%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo___.jpg"
          },
          {
           "type": "BYTES",
           "value": "963B"
          },
          {
           "type": "PERCENTAGE",
           "value": "22%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://ads.img.globo.com/RealMedia/ads/Creatives/globocom/ibm_459_100_ibm_120601/logo_IBM_65x30-v2.jpg"
          },
          {
           "type": "BYTES",
           "value": "910B"
          },
          {
           "type": "PERCENTAGE",
           "value": "31%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/passagens_aereas/img/logo-mundi.png?a4da6f09d6be"
          },
          {
           "type": "BYTES",
           "value": "856B"
          },
          {
           "type": "PERCENTAGE",
           "value": "50%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/destaque_servicos_downloads/img/monitor-downloads.png?7e60adb40cd1"
          },
          {
           "type": "BYTES",
           "value": "471B"
          },
          {
           "type": "PERCENTAGE",
           "value": "13%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://static.clickon.com.br/sellit-client-http-static/communipons/med/PKITM.jpg"
          },
          {
           "type": "BYTES",
           "value": "447B"
          },
          {
           "type": "PERCENTAGE",
           "value": "10%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/ms/f/55x55/2012/04/17/cheias_de_charme.jpg"
          },
          {
           "type": "BYTES",
           "value": "365B"
          },
          {
           "type": "PERCENTAGE",
           "value": "15%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5RiL7gMHspvjS1vGNP4o-fZDq8eNttBAGidpT5Xc91jlCgVHxy0A0iOxSLrIOGxd9w==/s2.glbimg.com/1yDVWmPAicXweMYqGSsZGH5qQSi2u5NkKcas02BuxPjULzIZ_uVcwiG2p27tIyfP9vyGckgDxqzd2KV19FJ-Xg==/s.glbimg.com/jo/g1/f/original/2012/07/03/casual-vacancy.jpg"
          },
          {
           "type": "BYTES",
           "value": "329B"
          },
          {
           "type": "PERCENTAGE",
           "value": "14%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5Q2iPvcOhGmeXcGVZzBvcqNYJs3jERhjPoLcJ6AnE5SQLPpABLSL2YDq1k1_vVARAg==/s2.glbimg.com/ex02eInVzdtatGJSiE3iCDDJxGYPR0e8oqZDDs1l1PQkfVLAsLDC4yc7E3RpWWcktpvziEZGWsqlIi0IeD38Vg==/s.glbimg.com/jo/g1/f/original/2012/07/03/maconha4.jpg"
          },
          {
           "type": "BYTES",
           "value": "315B"
          },
          {
           "type": "PERCENTAGE",
           "value": "10%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5bGZ8DGqcLkR-9Gh-pLMHQvD4BVfKIsq4AtIM_ZKW0MGEIM6-m27NfoIi0i7BUwOVw==/s2.glbimg.com/oomOooaxqx0FUppHzqfScKQh-vdrUQ4w3ljOWkRUbJHB2imdhVQhbQAetkq5XuUOrVj2ztIapSGA7kdeQsY0KA==/s.glbimg.com/et/nv/f/original/2012/07/03/juliana-paes-3.jpg"
          },
          {
           "type": "BYTES",
           "value": "314B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5dEDsYc6tQNim6Awe1pG5TYmAUA5FjEpORUWFpsWoGkV5Sd0rhovEOiOe-QV8P40sw==/s2.glbimg.com/E04nJpltmkfjnNT3dREqPbI-a4n8BS31H8gfWB929zXZRuKR9ggLTohGFr9uqj94UF-z1XmmC6GCoecvZDPwfA==/s.glbimg.com/en/ho/f/original/2012/07/03/tevez.jpg"
          },
          {
           "type": "BYTES",
           "value": "311B"
          },
          {
           "type": "PERCENTAGE",
           "value": "12%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5f2Q2JQaKF830UI2gWza72_8lRrRh00Q2-ChXo9J7z8jWTasFKCfKMXu3BxgVhqHEA==/s2.glbimg.com/a0W0hZCBgnxdG-z01q4sjlsZW-4xl5nIWTiApnPLkEDXRwpU1Yu3mg7uRQBfjFmbXKPwxQ7CrkbhqUCMdqJEJg==/s.glbimg.com/et/nv/f/original/2012/06/25/cristal01.jpg"
          },
          {
           "type": "BYTES",
           "value": "309B"
          },
          {
           "type": "PERCENTAGE",
           "value": "17%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5UnLgFDrERVK7_evoJK_NMwhOaAtg8NSj8YmA9pmY-YsD-8jzb8Dkef2sK4mxqGReA==/s2.glbimg.com/5QJfkGokmqdUHByHcOP4zdsJSlVcuIJxswQNuRfuzcFNbLjb3YIKuF8aqaCMLjscG8iN5IM2FSPtgHXAKg-UfA==/s.glbimg.com/et/tv/f/original/2012/07/03/vitor-e-jorginho.jpg"
          },
          {
           "type": "BYTES",
           "value": "308B"
          },
          {
           "type": "PERCENTAGE",
           "value": "14%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5cmPc_fG32JgryA2u-t1x_rC79xQ2Jih-ik3Dh9MEMW4ZlMd6EvfLqQet2RCNSrl8Q==/s2.glbimg.com/-1vPzaJPS-u5B-42TgtTrJU7tFbCKav3EiMnByfW_2omzAbmbi69JkHmz3o31Jt0DzxPonigZZW7kMJM8oltMA==/s.glbimg.com/en/ho/f/original/2012/07/03/emma.jpg"
          },
          {
           "type": "BYTES",
           "value": "304B"
          },
          {
           "type": "PERCENTAGE",
           "value": "18%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5W7Xo8GHhpefTjSyvAoYod8X6cdG9vYceTM5uuBr_J1Z4IVcu50SRpZMMoPJZF1Ejg==/s2.glbimg.com/GdImdPKIqUS18Z1ih8t2a6FPAratdZF7dT-D7R_MKAG85tGK8dzw2OEZDEdGuyPdZQLvRikOj5XKOhD1PuHslA==/s.glbimg.com/en/ho/f/original/2012/07/02/tutorial_violencia-domestic.jpg"
          },
          {
           "type": "BYTES",
           "value": "301B"
          },
          {
           "type": "PERCENTAGE",
           "value": "18%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5Y8VPZQFLISAYYBMi57tIxslSfXm_7c0p7X-Qs8EXRwYyeJePVSqNuedjXxHYTjF9w==/s2.glbimg.com/K61wcJE67AL8fVnVMxw29SR-84RsX64aFmZyY1OHRL1rpsqE6dqLRnOVd4GIiLW_JcN7Pe-JZ_qM0vgffeZIqw==/s.glbimg.com/en/ho/f/original/2012/07/03/carminha.jpg"
          },
          {
           "type": "BYTES",
           "value": "299B"
          },
          {
           "type": "PERCENTAGE",
           "value": "15%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5aCo1lZaaVGCvPOuMus4U-Ui0ZKcXJvviaVq81yjh_HqsnJYSNDAAurjll_el6zb9Q==/s2.glbimg.com/KXRYJ3Q8Mao6DxJgSRDcBouPnE1VXJ26fzCDgLAiKRnqmT8pFoqS-33qmUXjAAwfqsXAqEhbHTQxvtq-fq3Vcw==/s.glbimg.com/es/ge/f/original/2012/07/03/encaradaandersonsilva-ufc148-adrianocaldas-21024.jpg"
          },
          {
           "type": "BYTES",
           "value": "299B"
          },
          {
           "type": "PERCENTAGE",
           "value": "16%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5TkUEeN6q27eyyEDJMEriY3jxKJI8RPK1NrSil1X7f5Eop6VzYAijKVlytlLPN-4zw==/s2.glbimg.com/Kibgihw1ifBmwE0cNWH7A1qIiHm8iqfQ6EZsce5X9LbpCUWm1hT5YKvwrbT6RLr5P35J2RwUY10xOCLnctxc1w==/s.glbimg.com/en/ho/f/original/2012/06/04/card.jpg"
          },
          {
           "type": "BYTES",
           "value": "290B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5XCiwiz8p9bsq63wUwv9td_nhTobkjfGULY3t24PBR23LVHTgHnoTf4zNAtA0QTgUQ==/s2.glbimg.com/K61wcJE67AL8fVnVMxw29QhBEifvyIaShoKj_CyPaLeo6nWW5bLyBuYoJGKlqRSjZk7ZDUeYPLBe8joqXjQ4hQ==/s.glbimg.com/en/ho/f/original/2012/07/03/unhas.jpg"
          },
          {
           "type": "BYTES",
           "value": "289B"
          },
          {
           "type": "PERCENTAGE",
           "value": "21%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5WiMXXP83qYHwdf5DNhMDvas_T-Bhi17_IxX74Emk6WKjcQXX86jJ4l1kEbiHYJawA==/s2.glbimg.com/icvGiwESeH9QnsG4v2Gnk23Mv7rcr4YCK6ySt5-ndHGdr0B3usOuOYOsNXiZmocu3Hs4u0v0FC7rna7d7_br_w==/s.glbimg.com/et/nv/f/original/2012/06/28/valeria-josue.jpg"
          },
          {
           "type": "BYTES",
           "value": "288B"
          },
          {
           "type": "PERCENTAGE",
           "value": "14%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5fuBmPc_1BKfGWNYD0_8CLUEp_Z5xeucmmNpmCZMQbyNbe649OUoGLqo6R6w2s8eSw==/s2.glbimg.com/lu2AEq9qa0N0AsHn8N-JbXdjQmV70B4bIKh4bFBf7XhwCV5wLn7vBpetnDLRby8R-08m9mohrYjggsJ-910ZUA==/s.glbimg.com/en/ho/f/original/2012/07/03/valente.jpg"
          },
          {
           "type": "BYTES",
           "value": "285B"
          },
          {
           "type": "PERCENTAGE",
           "value": "20%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5eG4tGUuEe33LKAA0ad3eniSkXSiMRGschXsDXMiYCwmnowFvnyXp8Lei2Renmh-mQ==/s2.glbimg.com/eQOwmOO5MbH4zH5Lx9-IOHAK0EXb-bXqkKLAnKzMNIPcp-5wMUR68LrrIgqvy_8H6Ww-e9-ABFrHQaIUo9gCxA==/s.glbimg.com/en/ho/f/original/2012/07/03/ela.jpg"
          },
          {
           "type": "BYTES",
           "value": "284B"
          },
          {
           "type": "PERCENTAGE",
           "value": "22%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5ekmSqhy34cz-UXHFWXHCVLSEyVaphkagY-mxfiJh8sxNzdeDTbsgeU7DKjWjN0FBw==/s2.glbimg.com/1Gem-TR69ena5UXNwDKjEfUeWT1RuQzK9Ix9e-mg5rcn56WGbrQt1RP66CK3ytv8iVbR6CBUu7yRZm0X7xi9gQ==/s.glbimg.com/en/ho/f/original/2012/07/03/adele.jpg"
          },
          {
           "type": "BYTES",
           "value": "282B"
          },
          {
           "type": "PERCENTAGE",
           "value": "25%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5ZTHSZ8PuX0nVReuTdsEvl6SOqI1WP_boz_pnCwgjRfGK7rfvWXkkm9_A3bRLFzmwg==/s2.glbimg.com/iTFnefRZmVSqFUtwcw_Kp7aHGnnmeQX3aQoIQfBmVBh8CF2sBOpXGDWcni7nH-HO2SyqKztow76nX9HAdYQzGQ==/s.glbimg.com/et/tv/f/original/2012/06/28/bial.jpg"
          },
          {
           "type": "BYTES",
           "value": "279B"
          },
          {
           "type": "PERCENTAGE",
           "value": "12%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5XeXQ4Ze6WzDpxzgc2GIT48uRQ6_sqfo6OB_uPWUnPnH9RqDzkWw_HWsG4BK5MTw1w==/s2.glbimg.com/kFmLI1t_UQu6oxHSOx0Vge3nI0F2RhAZrp8lshS6eBrA1dfZ6HJZ79cwjfzN2EUZZNQ1izCz649QTrWz7X5thA==/s.glbimg.com/jo/g1/f/original/2012/07/03/grota_italia.jpg"
          },
          {
           "type": "BYTES",
           "value": "273B"
          },
          {
           "type": "PERCENTAGE",
           "value": "26%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5dcS2JC_h5WFNt5-ZDi1FQ67C7uh_EU8g1iSQvbpdGb4X-exVpXgf_aaTrY1gQMheQ==/s2.glbimg.com/HhikCieWIVeZ69TCjFsNT-suN_AaiwEpODeSFOG3MdZiE4cC4RL4zLPf4Llj-FUnSWOTpTwBV1pf0IvRSB0p9Q==/s.glbimg.com/es/ge/f/original/2012/07/03/torcedoresbocafestaaeroporto_diegoribeiro.jpg"
          },
          {
           "type": "BYTES",
           "value": "272B"
          },
          {
           "type": "PERCENTAGE",
           "value": "15%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5brwRR0ISzcru0mZeJXDCM4E9HXqQ1dseL12IszlVTlZz91DzjUWmlj30VkMg7iR0Q==/s2.glbimg.com/8_AgzvKG0xYX0eYbC3ZBgFlmGQhQjV0cAWnmOYkKl8XVxtgBv7O9gz-W5SrJfYNJzGzworCNpAN-22Uo4dYbTA==/s.glbimg.com/en/ho/f/original/2012/07/03/caveira1.jpg"
          },
          {
           "type": "BYTES",
           "value": "270B"
          },
          {
           "type": "PERCENTAGE",
           "value": "12%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5Xnx57vtULIigm1scURAvWholzFSRmXcchlCIoa09WXuRlrtEKJ7X5z7S7L_BicC2w==/s2.glbimg.com/Q-4IBi2eLP9E4w8SUJqLhBVBADX9f6TJN53T5THMxHs9ty3jlL1gvhoQ0Fuk2NkoJHJRx1-hiAnkMKUXPaupFg==/s.glbimg.com/en/ho/f/original/2012/07/03/mae.jpg"
          },
          {
           "type": "BYTES",
           "value": "269B"
          },
          {
           "type": "PERCENTAGE",
           "value": "20%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5ZnMiRB7jdyzPBDcIHhO_RXUFgUTC4us5PYCM-LsXnBqwN2xet-Z8nmW1Jmij6VBNw==/s2.glbimg.com/IKO7AqMfeiOXjy9F-VnmFrNviY7IXFHhc8w3FyMZNsGfq7F_pbZt59z1eYkB_kBWobCjyia4ILCO4abegxIyPw==/s.glbimg.com/en/ho/f/original/2012/07/03/museus.jpg"
          },
          {
           "type": "BYTES",
           "value": "266B"
          },
          {
           "type": "PERCENTAGE",
           "value": "12%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5ccCwUvwny6ThGZcpNTnSPTka290JRrlJkzUrawblGnBaiwt2L0wXbw1Kx68GjN1JQ==/s2.glbimg.com/kzixLzdh51nZ1PpJE5h439vvLpFZR46ejolu8pzGHt3Ze0rj4_ag_aiMyfOoUUmsAFxxSEN8OocyInFqar6Zew==/s.glbimg.com/et/nv/f/original/2012/07/02/anabela_1.jpg"
          },
          {
           "type": "BYTES",
           "value": "266B"
          },
          {
           "type": "PERCENTAGE",
           "value": "28%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5YwktHxWfZwChQe15X1a1VgsesrY3VAnfyI-Qn8-Qjv8k-XBb2HspysAbRITeZlLnQ==/s2.glbimg.com/1qcjv6hTtuSu886Bl0DbA89Ym1KpzoRTf7ScdaY5KnbGvs0L-9wEd0NKKMb7yo6gXf2K_WE0K5TI5MFE6PqUAQ==/s.glbimg.com/es/ge/f/original/2012/06/23/conca_sina4.jpg"
          },
          {
           "type": "BYTES",
           "value": "265B"
          },
          {
           "type": "PERCENTAGE",
           "value": "28%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5eXPoXRu1oE6u1vh-VS7vJveoDQ-jvVYk9CpT6buYFpyVl839lr82HOYB8kirXMrEA==/s2.glbimg.com/_dfzN8iXr9J4qExTgCPhrTVQsTHVXpP_W56rCEi7yg7TGqgE_brZ3QOuN9IA-LwNona6_Eo4CQv9WLbTY2QJ8Q==/s.glbimg.com/es/ge/f/original/2012/07/03/juninhopernambucano4_alexandrecassiano_glo.jpg"
          },
          {
           "type": "BYTES",
           "value": "265B"
          },
          {
           "type": "PERCENTAGE",
           "value": "27%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5VH9I6gWZIJ3_oNk86iCqVK3pcP_bZPFQ3342MGShI_QmM3nkxXxA5wpM_gmBjUkfA==/s2.glbimg.com/YcUHyuHEw0-CN4oD0RiNrQViiHtSytBspcXtdoAf7tJjeIMlDD8TVZz0D5CexJWPLYeyeEIHrleLe4N36ipF2A==/s.glbimg.com/po/tt/f/original/2012/07/03/2203qvwv.jpg"
          },
          {
           "type": "BYTES",
           "value": "262B"
          },
          {
           "type": "PERCENTAGE",
           "value": "19%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5aA7kM9BGXEewJ52Q9jo9I589M9p6S74Vsf69gTpnKSDXx8VxIjAWc5ChqeevnuM6g==/s2.glbimg.com/dZ35rdVtfMmgwauCKb2A4_FE1V61Kv32HevDjEO6PFHoBMNKXg1gTPYnZHRgCMFJ3gG3pqK15_J3wECgInjtxQ==/s.glbimg.com/es/ge/f/original/2012/06/28/jorgesampaoli_lau_afp_62.jpg"
          },
          {
           "type": "BYTES",
           "value": "259B"
          },
          {
           "type": "PERCENTAGE",
           "value": "24%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/yq2Ruxgo6XPF6dMbJKNc5d_L4OFEij0QX6kl49cWElOX-yObl8fIDQyIEftGDKHv2N6BJK7Ua5vKHL0LFKcleg==/s2.glbimg.com/8WkU1u5CIQ2WBtYQJjB4Nezmg4vsiTa_UAZ3r0fdteCbsKXCiGl9DFL5Ixcdfa3BUr5nV_PgO0izrHMCpqV14w==/s.glbimg.com/jo/g1/f/original/2012/07/03/tmobile.jpg"
          },
          {
           "type": "BYTES",
           "value": "257B"
          },
          {
           "type": "PERCENTAGE",
           "value": "25%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "OptimizeTheOrderOfStylesAndScripts": {
    "localizedRuleName": "Optimize the order of styles and scripts",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "PreferAsyncResources": {
    "localizedRuleName": "Prefer asynchronous resources",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "PutCssInTheDocumentHead": {
    "localizedRuleName": "Put CSS in the document head",
    "ruleScore": 95,
    "ruleImpact": 0.001,
    "urlBlocks": [
     {
      "header": {
       "format": "CSS in the document body adversely impacts rendering performance."
      }
     },
     {
      "header": {
       "format": "$1 has CSS in the document body:",
       "args": [
        {
         "type": "URL",
         "value": "http://vitrines.globo.com/vitrine/shop/5/globocom/home.html?ss=globocom/home&url=&sw=940&sh=347&sps=5&sts=5&color_text=0669de"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1 style block(s) in the body should be moved to the document head.",
         "args": [
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "RemoveQueryStringsFromStaticResources": {
    "localizedRuleName": "Remove query strings from static resources",
    "ruleScore": 80,
    "ruleImpact": 0.0,
    "urlBlocks": [
     {
      "header": {
       "format": "Resources with a \"?\" in the URL are not cached by some proxy caching servers.  Remove the query string and encode the parameters into the URL for the following resources:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://api.g1.globo.com/tempo/cidade-resumida/sp/sao-paulo.jsonp?callback=g1_previsao_cidade"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://musica.com.br/api/artistas/top_artistas/30?callback=callbackMusicaTopArtistas"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://musica.com.br/api/musicas/top_musicas/3?callback=callbackMusicaTopMusicas"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom/img/sprite_menu.png?4e3425d44921"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/busca/img/sprite.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/common-sa4da0b5cac.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/first-scroll-delimiter-border.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/logo_velocimetro.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/pontilhado.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/pontilhado_2px.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/agrupador_super_wide_quadruplo_com_widget/img/arrow.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/box_previsao_tempo/img/sprite1.gif?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/box_previsao_tempo/img/sprite_icones_previsao.png?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/box_previsao_tempo/img/sprite_menu.png?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/destaque_servicos_downloads/img/monitor-downloads.png?7e60adb40cd1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/destaques_core/img/bullet.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/destaques_core/img/pontilhado_2px.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widget_clickon/img/clickon_circle.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widget_clickon/img/clickon_logo.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_home/widget_base/img/ajax_loader.gif?0e1c2d69768a"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_home/widget_base/img/sprite_widgets_home.png?0e1c2d69768a"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_home/widget_brasileirao/img/escudos_times.png?0e1c2d69768a"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_personalizaveis/base/img/ajax_loader_white.gif?d8e3b5d86cd8"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_personalizaveis/noticias2/img/flags.png?d8e3b5d86cd8"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_personalizaveis/times2/img/times.jpg?d8e3b5d86cd8"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/base/img/sprite1.png?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/fipe/img/icon.png?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/passagens_aereas/img/icone-viagem.png?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/passagens_aereas/img/logo-mundi.png?a4da6f09d6be"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "ServeResourcesFromAConsistentUrl": {
    "localizedRuleName": "Serve resources from a consistent URL",
    "ruleScore": 79,
    "ruleImpact": 8.0732,
    "urlBlocks": [
     {
      "header": {
       "format": "The following resources have identical contents, but are served from different URLs.  Serve these resources from a consistent URL to save $1 request(s) and $2.",
       "args": [
        {
         "type": "INT_LITERAL",
         "value": "3"
        },
        {
         "type": "BYTES",
         "value": "13KiB"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo_.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo__.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/m/s/vitrine/patrocinio/zoom_100x30_vitrine-globo___.jpg"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following resources have identical contents, but are served from different URLs.  Serve these resources from a consistent URL to save $1 request(s) and $2.",
       "args": [
        {
         "type": "INT_LITERAL",
         "value": "1"
        },
        {
         "type": "BYTES",
         "value": "4.6KiB"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/v/zoom/28/2012/07/03/171554/4.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/po/an/v/zoom/29/2012/07/03/171601/0.jpg"
          }
         ]
        }
       }
      ]
     },
     {
      "header": {
       "format": "The following resources have identical contents, but are served from different URLs.  Serve these resources from a consistent URL to save $1 request(s) and $2.",
       "args": [
        {
         "type": "INT_LITERAL",
         "value": "1"
        },
        {
         "type": "BYTES",
         "value": "2.5KiB"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom/img/sprite_menu.png?4e3425d44921"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/box_previsao_tempo/img/sprite_menu.png?a4da6f09d6be"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "ServeScaledImages": {
    "localizedRuleName": "Serve scaled images",
    "ruleScore": 85,
    "ruleImpact": 10.2577,
    "urlBlocks": [
     {
      "header": {
       "format": "The following images are resized in HTML or CSS.  Serving scaled images could save $1 ($2 reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "100KiB"
        },
        {
         "type": "PERCENTAGE",
         "value": "62%"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s03.video.glbimg.com/480x300/2021210.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "480"
          },
          {
           "type": "INT_LITERAL",
           "value": "300"
          },
          {
           "type": "INT_LITERAL",
           "value": "100"
          },
          {
           "type": "INT_LITERAL",
           "value": "67"
          },
          {
           "type": "BYTES",
           "value": "29.9KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "95%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s04.video.glbimg.com/480x300/2023043.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "480"
          },
          {
           "type": "INT_LITERAL",
           "value": "300"
          },
          {
           "type": "INT_LITERAL",
           "value": "100"
          },
          {
           "type": "INT_LITERAL",
           "value": "67"
          },
          {
           "type": "BYTES",
           "value": "29.6KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "95%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/be0TpRZm9r7bLXa6AcYVftV-T8ZybWlgvWNIFRnz24r3vboF6C56CXrfveIyQWrN/s.glbimg.com/et/nv/f/original/2012/06/29/tessalia_.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "280"
          },
          {
           "type": "INT_LITERAL",
           "value": "174"
          },
          {
           "type": "INT_LITERAL",
           "value": "100"
          },
          {
           "type": "INT_LITERAL",
           "value": "67"
          },
          {
           "type": "BYTES",
           "value": "16.5KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "86%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://s2.glbimg.com/UsuJZe-Hz0JWJZpt_FDQTlCh1yHeX9prVtXqdGi9W8JyBezKreXyWnw16ZghyA_8/s.glbimg.com/et/nv/f/original/2012/06/29/suelen_roni.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "280"
          },
          {
           "type": "INT_LITERAL",
           "value": "174"
          },
          {
           "type": "INT_LITERAL",
           "value": "100"
          },
          {
           "type": "INT_LITERAL",
           "value": "67"
          },
          {
           "type": "BYTES",
           "value": "13.1KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "86%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023265.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "320"
          },
          {
           "type": "INT_LITERAL",
           "value": "200"
          },
          {
           "type": "INT_LITERAL",
           "value": "300"
          },
          {
           "type": "INT_LITERAL",
           "value": "170"
          },
          {
           "type": "BYTES",
           "value": "2.8KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "21%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023250.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "320"
          },
          {
           "type": "INT_LITERAL",
           "value": "200"
          },
          {
           "type": "INT_LITERAL",
           "value": "300"
          },
          {
           "type": "INT_LITERAL",
           "value": "170"
          },
          {
           "type": "BYTES",
           "value": "2.8KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "21%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023183.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "320"
          },
          {
           "type": "INT_LITERAL",
           "value": "200"
          },
          {
           "type": "INT_LITERAL",
           "value": "300"
          },
          {
           "type": "INT_LITERAL",
           "value": "170"
          },
          {
           "type": "BYTES",
           "value": "2.7KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "21%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://static.clickon.com.br/sellit-client-http-static/communipons/med/PKITM.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "100"
          },
          {
           "type": "INT_LITERAL",
           "value": "63"
          },
          {
           "type": "INT_LITERAL",
           "value": "90"
          },
          {
           "type": "INT_LITERAL",
           "value": "53"
          },
          {
           "type": "BYTES",
           "value": "1.1KiB"
          },
          {
           "type": "PERCENTAGE",
           "value": "25%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022689.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "180"
          },
          {
           "type": "INT_LITERAL",
           "value": "101"
          },
          {
           "type": "INT_LITERAL",
           "value": "172"
          },
          {
           "type": "INT_LITERAL",
           "value": "97"
          },
          {
           "type": "BYTES",
           "value": "452B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2020529.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "180"
          },
          {
           "type": "INT_LITERAL",
           "value": "101"
          },
          {
           "type": "INT_LITERAL",
           "value": "172"
          },
          {
           "type": "INT_LITERAL",
           "value": "97"
          },
          {
           "type": "BYTES",
           "value": "322B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2021488.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "180"
          },
          {
           "type": "INT_LITERAL",
           "value": "101"
          },
          {
           "type": "INT_LITERAL",
           "value": "172"
          },
          {
           "type": "INT_LITERAL",
           "value": "97"
          },
          {
           "type": "BYTES",
           "value": "284B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022191.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "180"
          },
          {
           "type": "INT_LITERAL",
           "value": "101"
          },
          {
           "type": "INT_LITERAL",
           "value": "172"
          },
          {
           "type": "INT_LITERAL",
           "value": "97"
          },
          {
           "type": "BYTES",
           "value": "280B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1 is resized in HTML or CSS from $2x$3 to $4x$5.  Serving a scaled image could save $6 ($7 reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022241.jpg"
          },
          {
           "type": "INT_LITERAL",
           "value": "180"
          },
          {
           "type": "INT_LITERAL",
           "value": "101"
          },
          {
           "type": "INT_LITERAL",
           "value": "172"
          },
          {
           "type": "INT_LITERAL",
           "value": "97"
          },
          {
           "type": "BYTES",
           "value": "277B"
          },
          {
           "type": "PERCENTAGE",
           "value": "9%"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpecifyACacheValidator": {
    "localizedRuleName": "Specify a cache validator",
    "ruleScore": 92,
    "ruleImpact": 3.0,
    "urlBlocks": [
     {
      "header": {
       "format": "The following resources are missing a cache validator. Resources that do not specify a cache validator cannot be refreshed efficiently. Specify a Last-Modified or ETag header to enable cache validation for the following resources:"
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2020529.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2021488.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022191.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022241.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/180x101/2022689.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023183.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023250.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://img.video.globo.com/320x200/2023265.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://musica.com.br/api/artistas/top_artistas/30?callback=callbackMusicaTopArtistas"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://musica.com.br/api/musicas/top_musicas/3?callback=callbackMusicaTopMusicas"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s03.video.glbimg.com/480x300/2021210.jpg"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s04.video.glbimg.com/480x300/2023043.jpg"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpecifyAVaryAcceptEncodingHeader": {
    "localizedRuleName": "Specify a Vary: Accept-Encoding header",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "SpecifyCharsetEarly": {
    "localizedRuleName": "Specify a character set",
    "ruleScore": 95,
    "ruleImpact": 0.001,
    "urlBlocks": [
     {
      "header": {
       "format": "The following resources have no character set specified in their HTTP headers. Specifying a character set in HTTP headers can speed up browser rendering."
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://vitrines.globo.com/vitrine/shop/5/globocom/home.html?ss=globocom/home&url=&sw=940&sh=347&sps=5&sts=5&color_text=0669de"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpecifyImageDimensions": {
    "localizedRuleName": "Specify image dimensions",
    "ruleScore": 100,
    "ruleImpact": 0.0
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleScore": 70,
    "ruleImpact": 10.0,
    "urlBlocks": [
     {
      "header": {
       "format": "The following images served from $1 should be combined into as few images as possible using CSS sprites.",
       "args": [
        {
         "type": "STRING_LITERAL",
         "value": "glbimg.com"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/first-scroll-delimiter-border.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/pontilhado.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/globocom2012/img/pontilhado_2px.png?7dc2f39ca10c"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/agrupador_super_wide_quadruplo_com_widget/img/arrow.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/box_previsao_tempo/img/sprite1.gif?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/destaques_core/img/bullet.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/destaques_core/img/pontilhado_2px.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widget_clickon/img/clickon_circle.png?82983f50317e"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_home/widget_base/img/ajax_loader.gif?0e1c2d69768a"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/base/img/sprite1.png?a4da6f09d6be"
          }
         ]
        }
       },
       {
        "result": {
         "format": "$1",
         "args": [
          {
           "type": "URL",
           "value": "http://s.glbimg.com/en/ho/static/libby/widgets_servicos/passagens_aereas/img/logo-mundi.png?a4da6f09d6be"
          }
         ]
        }
       }
      ]
     }
    ]
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 12
 }
}
);