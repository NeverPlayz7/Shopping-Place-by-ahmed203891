particlesJS("particles-js", {
    "particles": {
        "number": { "value":100,"density":{"enable":true,"value_area":800} },
        "color":{"value":["#00ffe4","#ff00ff","#ffea00"]},
        "shape":{"type":"circle","stroke":{"width":0},"polygon":{"nb_sides":5}},
        "opacity":{"value":0.7,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1}},
        "size":{"value":4,"random":true,"anim":{"enable":true,"speed":3,"size_min":0.1}},
        "line_linked":{"enable":true,"distance":150,"color":"#00ffe4","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out"}
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},
        "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2},"repulse":{"distance":100},"push":{"particles_nb":4},"remove":{"particles_nb":2}}
    },
    "retina_detect":true
});
