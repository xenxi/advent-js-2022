# Nadie quiere hacer horas extra 👨‍🏭⏲
## Instrucciones

Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que **<span style="color:#faca15">cada vez que una jornada de trabajo se pierde por un día festivo</span>**, habrá que compensarlo con **<span style="color:#faca15">dos horas extra otro día de ese mismo año</span>**.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están **<span style="color:#faca15">preparando un programa que les diga el número de horas extras que harían</span>** en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es **<span style="color:#faca15">de lunes a viernes</span>**. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

``` ts
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año
```
Cosas a tener en cuenta y consejos:

* <span style="color:#faca15">El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.</span>
* <span style="color:#faca15">Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.</span>
* <span style="color:#faca15">El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.</span>