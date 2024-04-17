var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-view",
      "name": "Front View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.0969193501285073,
        "pitch": -0.0868477578043958,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -3.0911921131371596,
          "pitch": 0.3586880324690789,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.262239945892766,
        "pitch": -0.023089552334305097,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.1660964772579465,
          "pitch": 0.476021864106114,
          "rotation": 7.0685834705770345,
          "target": "0-front-view"
        },
        {
          "yaw": 0.19565887580253438,
          "pitch": 0.12241945422288936,
          "rotation": 0,
          "target": "2-principle-office"
        },
        {
          "yaw": 0.4224529695395418,
          "pitch": 0.34447876251829257,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-principle-office",
      "name": "Principle Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.9108446104112318,
          "pitch": 0.5595746572331386,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.03588396149973683,
        "pitch": 0.04862761183945352,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.010587389528048163,
          "pitch": 0.3395825424481629,
          "rotation": 0,
          "target": "12-sportsskating"
        },
        {
          "yaw": 3.1142853639251733,
          "pitch": 0.3145971967524446,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-ground",
      "name": "Main Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.0292215672652638,
        "pitch": -0.14738054526439015,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.3691167488355145,
          "pitch": 0.21633645495960963,
          "rotation": 0.7853981633974483,
          "target": "3-corridor"
        },
        {
          "yaw": 2.8898878942794664,
          "pitch": 0.21783084496799887,
          "rotation": 6.283185307179586,
          "target": "9-vr-class"
        },
        {
          "yaw": -0.7051558636087982,
          "pitch": 0.20408041500444085,
          "rotation": 0,
          "target": "8-science-lab"
        },
        {
          "yaw": -0.5362259109246477,
          "pitch": 0.2232899069341574,
          "rotation": 0,
          "target": "5-computer-lab"
        },
        {
          "yaw": -1.237893643952905,
          "pitch": 0.27371334260432967,
          "rotation": 0.7853981633974483,
          "target": "13-volly-ball-ground"
        },
        {
          "yaw": -1.366763759022323,
          "pitch": 0.06921285111439879,
          "rotation": 0.7853981633974483,
          "target": "11-sportskarate"
        },
        {
          "yaw": 2.582478228629201,
          "pitch": 0.273162578694647,
          "rotation": 0,
          "target": "7-music-room"
        },
        {
          "yaw": 0.5849868662307749,
          "pitch": 0.22060407643796154,
          "rotation": 0.7853981633974483,
          "target": "6-play-room"
        },
        {
          "yaw": -2.088011525832261,
          "pitch": 0.10574318500835389,
          "rotation": 5.497787143782138,
          "target": "12-sportsskating"
        },
        {
          "yaw": -0.10028903179738435,
          "pitch": 0.14947033850107871,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -1.6108608729879847,
          "pitch": 0.07911963356993645,
          "rotation": 0.7853981633974483,
          "target": "0-front-view"
        },
        {
          "yaw": -3.0600323471448103,
          "pitch": 0.2943088452267819,
          "rotation": 0,
          "target": "10-auditorium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-computer-lab",
      "name": "Computer Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.1260252219697566,
        "pitch": 0.007979721604479906,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.5283132049635171,
          "pitch": 0.45519992328735803,
          "rotation": 0.7853981633974483,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-play-room",
      "name": "Play Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.9052755044503407,
        "pitch": 0.7255783948857015,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.72958790469161,
          "pitch": 0.4719547131911561,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-music-room",
      "name": "Music Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.950668293759632,
        "pitch": 0.1822420395577833,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 0.3108708931436155,
          "pitch": 0.12710176164024745,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-science-lab",
      "name": "Science Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.6458808291399727,
        "pitch": 0.05386480061699572,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 2.535548550776367,
          "pitch": 0.38235317382975254,
          "rotation": 0.7853981633974483,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-vr-class",
      "name": "VR Class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.732182972669837,
        "pitch": 0.16270140803425548,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": 1.3852064785380342,
          "pitch": 0.5622920115511505,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-auditorium",
      "name": "Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.126135403684625,
        "pitch": -0.4226496893157332,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.9278257939719552,
          "pitch": 0.22361595199418005,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sportskarate",
      "name": "Sports(Karate)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.088128618562852,
        "pitch": 0.11663314418635906,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -2.6115809438861834,
          "pitch": 0.44351556422661,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sportsskating",
      "name": "Sports(Skating)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.7518808881432015,
        "pitch": 0.09752338453849063,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -1.677517480712165,
          "pitch": 0.29483699926120366,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-volly-ball-ground",
      "name": "Volly Ball Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.784333465769894,
        "pitch": 0.42873006592254725,
        "fov": 1.388190413100756
      },
      "linkHotspots": [
        {
          "yaw": -0.010526416338802136,
          "pitch": 0.5406993242392257,
          "rotation": 0,
          "target": "4-main-ground"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
