#include <stdio.h>
 
int main()
{
  int n, sum = 0, c, value;
 
  printf("Enter number?\n");
  scanf("%d", &n);
 
  for (c = 1; c <= n; c++)
  {
    sum = sum + c;
  }
 
  printf("Sum of the integers = %d\n", sum);
 
  return 0;
}