let fight = (enemy, player, enemyIsAlive) => {
    //console.log(player.name)
    let damagePoints = (randomCalculator(10))
    let enemyHealth = enemy.changeHealth(damagePoints)
    //console.log(`enemyHealth`,enemyHealth)
    //console.log(`enemy.currentHealth`, enemy.currentHealth)
    if(enemyHealth > 0){
        console.log(`\n You react!\nYou have dealt the enemy ${damagePoints} damage points! They have ${enemyHealth} points left!`)
    } else {
        console.log(`\n\nYou won that battle!\n\n ${enemy.name} is finally vanquished! You now have ${enemy.loot}.`)
        player.addLoot(enemy.loot)
        //player.currentHealth = player.currentHealth + 10
        //player.listLoot(player.lootList)
        //remove enemy from enemy list - write function for this
        enemyIsAlive = false
    }
    return enemyIsAlive
}