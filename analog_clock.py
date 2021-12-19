import turtle
import time

timer = turtle.Turtle()
timer.getscreen().title('simple analog clock by Habtamu')
timer.getscreen().bgcolor('#FE5BAC')
timer.getscreen().setup(width=600, height=600)
timer.getscreen().tracer(0)
timer.speed(0)
timer.hideturtle()


def counter(hour, minute, second):
   timer.penup()
   timer.pensize(2)
   timer.goto(0, 100)
   timer.setheading(180)
   timer.color('#351E10', '#F8DE7E')
   timer.pendown()
   timer.begin_fill()
   timer.circle(100)
   timer.end_fill()
   timer.penup()
   timer.goto(0, 0)

   for n in range(1, 13):
       ang_of_rotation = 30
       timer.right(ang_of_rotation)
       timer.penup()
       timer.forward(80)
       timer.pendown()
       timer.color('#000080')

       if n % 3 == 0:
           timer.pensize(5)
           timer.forward(20)

       else:
           timer.pensize(3)
           timer.penup()
           timer.forward(10)
           timer.pendown()
           timer.forward(10)
       timer.penup()
       timer.goto(0, 0)

   # code for hour arm
   timer.goto(0, 0)
   angle = (hour / 12) * 360
   timer.right(angle)
   timer.pensize(4)
   timer.pencolor('green')
   timer.pendown()
   timer.forward(40)
   timer.penup()
   timer.goto(0, 0)

   # code for minute arm
   angle = (minute / 60) * 360
   timer.pensize(3)
   timer.pencolor('#351E10')
   timer.right(angle)
   timer.pendown()
   timer.forward(50)
   timer.penup()
   timer.goto(0, 0)
   timer.setheading(90)

   # code for second arm
   angle = (second / 60) * 360
   timer.right(angle)
   timer.pensize(2)
   timer.pencolor('red')
   timer.pendown()
   timer.forward(60)
   timer.penup()
   timer.goto(0, 0)
   timer.setheading(90)


while True:
   hour = int(time.strftime('%I'))
   minute = int(time.strftime('%M'))
   second = int(time.strftime('%S'))

   counter(hour, minute, second)
   timer.getscreen().update()
   time.sleep(1)
   timer.clear()
turtle.done()

