#include <stdio.h>
#include <cs50.h>

int main (void)
{
    int height;
    do
    {
        height = get_int("Digite um número:");
    }
    while (height < 1 || height > 8);
}