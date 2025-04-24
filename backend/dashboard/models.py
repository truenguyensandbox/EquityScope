from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    ticker = models.CharField(max_length=10)
    sector = models.CharField(max_length=100)
    index = models.CharField(max_length=100)  # S&P 500, Dow Jones, etc.

    def __str__(self):
        return f"{self.name} ({self.ticker})"

class Ownership(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    owner = models.CharField(max_length=255)  # BlackRock, Vanguard, etc.
    ownership_percent = models.FloatField()

    def __str__(self):
        return f"{self.owner} owns {self.ownership_percent}% of {self.company.ticker}"
