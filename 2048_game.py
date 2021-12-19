''' import the random module and from random mudule
    use randrange this is use for selecting random integer from
    the given range'''

from random import randrange

grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

def make_grid ():

    for i in range (4):
        for j in range (4):
            endspace= ' '*4
            if grid [i][j]>9:
                endspace=' '*3
            if grid [i][j]>99:
                endspace=' '*2
            if grid [i][j]>999:
                endspace=' '*1

            print (grid[i][j], end = endspace)
        print('')
        
def generate():
    odd = randrange(4)
    if ((odd>=0) and (odd<=2)):
        randnumber=2
    else :
        randnumber=4

    randrow= randrange (4)
    randcolumn = randrange(4)
    while (grid[randrow][randcolumn]>0):
        randrow= randrange (4)
        randcolumn = randrange(4)

    grid[randrow][randcolumn]= randnumber


def merge  (firstrow , firstcolumn,secondrow, secondcolumn):
    grid[secondrow][secondcolumn]*=2

def won():
    for row in grid:
        if 2048 in row:
            return True

def shiftright(row):
    for column in range (2,-1,-1):
        findcolumn=column+1
        while (grid [row][findcolumn]  ==0 and findcolumn<3):
            findcolumn +=1
        if (findcolumn==3 and grid [row][findcolumn]==0):
                grid[row][findcolumn]= grid [ row ][ column ]
                grid[row][column]=0
        elif (grid[row][column] == grid[row][findcolumn]):
                merge(row,column,row,findcolumn)
                grid[row][column]=0
        elif  (column<findcolumn-1):
                grid[row][findcolumn-1]=grid[row][column]
                grid[row][column]=0
                
def shiftleft(row):
    for column in range (1,4):
        findcolumn=column-1
        while (grid [row][findcolumn]  ==0 and findcolumn>0):
            findcolumn -=1
        if (findcolumn==0 and grid [row][findcolumn]==0):
                grid[row][findcolumn]= grid [ row ][ column ]
                grid[row][column]=0
        elif (grid[row][column] == grid[row][findcolumn]):
                merge(row,column,row,findcolumn)
                grid[row][column]=0
        elif  (column>findcolumn+1):
                grid[row][findcolumn+1]=grid[row][column]
                grid[row][column]=0

def shiftup(column):
    for row in range (1,4):
        findrow =row -1
        while (grid [findrow][column]  ==0 and findrow>0):
            findrow -=1
        if (findrow==0 and grid [findrow][column]==0):
                grid[findrow][column]= grid [ row ][ column ]
                grid[row][column]=0
        elif (grid[row][column] == grid[findrow][column]):
                merge(row,column,findrow,column)
                grid[row][column]=0
        elif  (row>findrow+1):
                grid[findrow+1][column]=grid[row][column]
                grid[row][column]=0
                
def shiftdown(column):
    for row in range (2,-1,-1):
        findrow =row +1
        while (grid [findrow][column]  ==0 and findrow<3):
            findrow +=1
        if (findrow==3 and grid [findrow][column]==0):
                grid[findrow][column]= grid [ row ][ column ]
                grid[row][column]=0
        elif (grid[row][column] == grid[findrow][column]):
                merge(row,column,findrow,column)
                grid[row][column]=0
        elif  (row<findrow-1):
                grid[findrow-1][column]=grid[row][column]
                grid[row][column]=0
                
def comparegrid(grid1,grid2):
    for row in range(4):
        for column in range(4):
            if (grid1[row][column]!= grid2[row][column]):
                return False
            
    return True

generate()
generate()

while (True):
    make_grid()
    move = input("moveup,movedown,moveright,move left press 'w','s','d','a' respectively")
    valid_key=['a','A','d','D','s','S','w','W']
    tempgrid=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for row in range(4):
        for column in range (4):
            tempgrid[row][column]=grid[row][column]
    
    
    if (move in valid_key):               

                
        if ((move == 'w') or (move == 'W' )):
            shiftup(0)
            shiftup(1)
            shiftup(2)
            shiftup(3)
        elif (move == 's'or move=='S'):
            shiftdown(0)
            shiftdown(1)
            shiftdown(2)
            shiftdown(3)
        elif (move=='a'or move=='A'):
            shiftleft(0)
            shiftleft(1)
            shiftleft(2)
            shiftleft(3)
        elif (move=='d'or move=='D'):
            shiftright(0)
            shiftright(1)
            shiftright(2)
            shiftright(3)
        if won():
            print ('you won the game')
            
                        
        if (comparegrid(grid,tempgrid)==False):
            
            generate()
    

    
 
