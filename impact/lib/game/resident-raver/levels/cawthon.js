ig.module( 'game.resident-raver.levels.cawthon' )
.requires('impact.image','game.resident-raver.entities.player','bootstrap.entities.spawner','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','game.resident-raver.entities.elevator','game.resident-raver.entities.powerup-spawner','bootstrap.entities.outofbounds','bootstrap.entities.void')
.defines(function(){
LevelCawthon=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":20,"y":194,"settings":{"name":"player"}},{"type":"EntitySpawner","x":120,"y":-28,"settings":{"name":"weapons","maxPool":1,"dealy":2,"spawnEntity":"EntityDoor","target":{"1":"door1","2":"door2","3":"door3","4":"door4","5":"door5","6":"door6","7":"door7"}}},{"type":"EntityVoid","x":112,"y":48,"settings":{"size":{"x":16,"y":32},"name":"door2"}},{"type":"EntityVoid","x":160,"y":32,"settings":{"size":{"x":16,"y":32},"name":"door1"}},{"type":"EntityVoid","x":64,"y":80,"settings":{"size":{"x":16,"y":32},"name":"door3"}},{"type":"EntityVoid","x":112,"y":112,"settings":{"size":{"x":16,"y":32},"name":"door4"}},{"type":"EntityVoid","x":64,"y":144,"settings":{"size":{"x":16,"y":32},"name":"door5"}},{"type":"EntityVoid","x":112,"y":176,"settings":{"size":{"x":16,"y":32},"name":"door6"}},{"type":"EntityVoid","x":160,"y":176,"settings":{"size":{"x":16,"y":32},"name":"door7"}},{"type":"EntityVoid","x":204,"y":12,"settings":{"name":"cord1"}},{"type":"EntityVoid","x":204,"y":220,"settings":{"name":"cord2"}},{"type":"EntityVoid","x":192,"y":24,"settings":{"size":{"x":32,"y":48},"name":"floor3"}},{"type":"EntityVoid","x":192,"y":88,"settings":{"size":{"x":32,"y":48},"name":"floor2"}},{"type":"EntityVoid","x":192,"y":168,"settings":{"size":{"x":32,"y":48},"name":"floor1"}},{"type":"EntityElevator","x":192,"y":128,"settings":{"target":{"1":"floor1","2":"floor2","3":"floor3"},"cord":{"1":"cord1","2":"cord2"}}},{"type":"EntityPowerupSpawner","x":36,"y":-4,"settings":{"size":{"x":24,"y":12},"name":"zombies","maxPool":40,"delay":2,"spawnEntity":"EntityZombie"}},{"type":"EntityOutofbounds","x":152,"y":244,"settings":{"size":{"x":104,"y":16}}},{"type":"EntityVoid","x":0,"y":-20,"settings":{"name":"settings","defaultInstructions":"Welcome To Cawthon Hall"}}],"layer":[{"name":"main","width":16,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"media/games/resident-raver/images/dorm-tiles-orange.png","repeat":false,"preRender":true,"distance":"1","tilesize":16,"foreground":false,"data":[[5,5,8,8,5,5,5,5,5,5,5,5,5,5,5,5],[5,8,7,7,8,8,8,8,8,8,8,8,8,8,8,5],[5,7,19,22,22,22,7,7,7,7,12,7,7,7,7,5],[5,7,26,26,26,26,7,12,7,19,24,20,7,7,19,5],[5,19,32,8,8,8,19,24,20,14,26,26,7,7,26,5],[5,26,26,7,12,7,26,26,26,30,8,8,7,7,8,5],[5,8,31,22,24,20,8,8,8,8,7,7,7,7,7,5],[5,7,26,26,26,26,7,12,7,19,22,20,7,7,19,5],[5,19,32,8,8,8,19,24,22,14,26,26,7,7,26,5],[5,26,26,7,12,7,26,26,26,30,8,8,7,7,8,5],[5,8,31,22,24,20,8,8,8,8,7,7,7,7,7,5],[5,7,26,26,26,26,7,12,7,7,12,7,7,7,7,5],[5,19,33,34,35,34,22,24,22,22,24,20,7,7,19,5],[5,14,14,14,14,14,14,14,14,14,14,14,36,36,14,5]]},{"name":"collision","width":16,"height":14,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,23,23,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1],[1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1],[1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1]]}]}/*]JSON*/;
LevelCawthonResources=[new ig.Image('media/games/resident-raver/images/dorm-tiles-orange.png')];
});