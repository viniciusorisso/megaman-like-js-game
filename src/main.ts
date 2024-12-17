import { Application, Assets, Sprite, Spritesheet, AnimatedSprite } from "pixi.js";

(async () => {
  // Create a new application
  const app = new Application();
  await app.init({ background: 'green', resizeTo: window });
  document.body.appendChild(app.canvas);
  // Initialize the application
  const atlasData= {
    frames:{
      idle1:{
        frame:{x:0, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle2:{
        frame:{x:78, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle3:{
        frame:{x:156, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle4:{
        frame:{x:234, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle5:{
        frame:{x:312, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle6:{
        frame:{x:390, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle7:{
        frame:{x:468, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle8:{
        frame:{x:546, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle9:{
        frame:{x:624, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle10:{
        frame:{x:702, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58}
      },
      idle11:{
        frame:{x:780, y:0, w:78, h:58},
        sourceSize:{w:78, h:58},
        spriteSourceSize:{x:0,y:0,w:78,h:58},
      }
    },
    meta:{
      image:'/public/assets/idle.png',
      size: {w:858, h:58},
      scale:.5
    },
    animations:{
      idleHuman:['idle1','idle2','idle3','idle4','idle5','idle6','idle7','idle8','idle9','idle10','idle11']
    }
  }
  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);
  const texture = await Assets.load(atlasData.meta.image);

  // Create a bunny Sprite
  const spritesheet = new Spritesheet(texture, atlasData);
  await spritesheet.parse();
  const animatedSprite = new AnimatedSprite(spritesheet.animations.idleHuman);
  app.stage.addChild(animatedSprite);
  animatedSprite.play();
  animatedSprite.animationSpeed= 0.15;

})();
