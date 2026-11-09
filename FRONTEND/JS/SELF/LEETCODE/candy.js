let ratings = [1, 2, 3, 2, 1];
candy = []
ratings.forEach(() => candy.push(1))

for (i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
        while (candy[i] <= candy[i - 1]) {
            candy[i]++
        }
    }
}
for (i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
        while (candy[i - 1] <= candy[i]) {
            candy[i - 1]++
        }
    }
}
console.log(ratings);
console.log(candy);
minCount = 0
candy.forEach((candyCount) => {
    minCount += candyCount
})
console.log(minCount);