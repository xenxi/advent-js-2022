# ¿Cuántas cajas de regalos puede llevar Papá Noel? 🎁📦🧮
## Instrucciones

Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. **<span style="color:#faca15">Cada regalo está representado por una cadena</span>**. Santa Claus tiene un trineo que puede llevar un **<span style="color:#faca15">peso limitado</span>**, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada renos tiene un **<span style="color:#faca15">límite de peso máximo que puede llevar. El límite de peso máximo</span>** de cada reno es **<span style="color:#faca15">igual a dos veces el número de letras en su nombre</span>**.

Tu tarea es implementar una función `distributeGifts(packOfGifts, reindeers)` que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. **<span style="color:#faca15">Las cajas de regalos no se pueden dividir</span>**.

``` ts
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
```
Cosas a tener en cuenta:

* **<span style="color:#faca15">Las cajas de regalos no se pueden dividir</span>**.
* **<span style="color:#faca15">Los nombres de los regalos y los renos siempre serán mayores que 0</span>**.