controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() <= 40) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            `, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            `, ship, 25, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            `, ship, -25, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            `, ship, 50, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            . . . 2 2 . . . 
            `, ship, -50, -140)
        projectile.startEffect(effects.coolRadial, 100)
        music.pewPew.play()
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, -6, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, 6, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, -12, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, 12, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, -25, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, 25, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, -50, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 2 4 . . . 
            . . . 5 7 . . . 
            . . . 9 6 . . . 
            . . . 8 c . . . 
            `, ship, 50, -140)
        projectile.startEffect(effects.coolRadial, 100)
        music.pewPew.play()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() <= 40) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            `, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            `, ship, 50, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            `, ship, -50, -140)
        projectile.startEffect(effects.coolRadial, 100)
        music.pewPew.play()
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, -12, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, 12, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, -25, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, 25, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, -50, -140)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            `, ship, 50, -140)
        projectile.startEffect(effects.coolRadial, 100)
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
    music.bigCrash.play()
})
let projectile: Sprite = null
let ship: Sprite = null
let asteroids = [
sprites.space.spaceSmallAsteroid1,
sprites.space.spaceSmallAsteroid0,
sprites.space.spaceAsteroid0,
sprites.space.spaceAsteroid1,
sprites.space.spaceAsteroid4,
sprites.space.spaceAsteroid3
]
ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(3)
effects.starField.startScreenEffect()
forever(function () {
    if (info.score() == 100) {
        game.over(true, effects.hearts)
    }
})
forever(function () {
    music.playMelody("B B B - E - E - ", 500)
    music.playMelody("A A G G F F E E ", 500)
    music.playMelody("C5 B A G F E D C ", 500)
    music.playMelody("C D E F G A B C5 ", 500)
    music.playMelody("C5 C5 C5 E E A E E ", 500)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
