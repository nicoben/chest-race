info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
// When a closed chest tile is touched by a player, replace it by an open chest tile.
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    info.changeScoreBy(1)
    if (info.score() == 16) {
        game.over(true, effects.smiles)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.melt)
})
game.splash("*** CHEST RACE ***", "Open all the chests and beat the clock but don't get burned...")
tiles.setTilemap(tiles.createTilemap(hex`0f000f00010101010101010301010101010101010201010201010301010201010201010101010101010301010101010101010101010101010301010101010101010201010201010301010201010201010101010101010101010101010101010101010101010101010101010101030303030301010401010303030303010101010101010101010101010101010101010101010101010101010101010201010201010301010201010201010101010101010301010101010101010101010101010301010101010101010201010201010301010201010201010101010101010301010101010101`, img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.chestClosed,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
let hunter = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(hunter, tiles.getTileLocation(7, 7))
scene.cameraFollowSprite(hunter)
controller.moveSprite(hunter)
info.setScore(0)
info.startCountdown(20)
