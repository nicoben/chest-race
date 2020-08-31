# When a closed chest tile is touched by a player, replace it by an open chest tile.

def on_overlap_tile(sprite, location):
    tiles.set_tile_at(location, sprites.dungeon.chest_open)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

tiles.set_tilemap(tiles.create_tilemap(hex("""
            1000100001010101010101010101010101010101010201010201010201010201010201010101010101010101010101010101010101010101010101010101010101010101010201010201010201010201010201010101010101010101010101010101010101010101010101010101010101010101010201010201010201010201010201010101010101010101010101010101010101010101010101010101010101010101010201010201010201010201010201010101010101010101010101010101010101010101010101010101010101010101010201010201010201010201010201010101010101010101010101010101010101010101010101010101010101010101
        """),
        img("""
            . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
        """),
        [myTiles.transparency16,
            sprites.dungeon.floor_light2,
            sprites.dungeon.chest_closed],
        TileScale.SIXTEEN))
hunter = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.place_on_tile(hunter, tiles.get_tile_location(0, 0))
scene.camera_follow_sprite(hunter)
controller.move_sprite(hunter)