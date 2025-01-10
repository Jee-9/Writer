from django.db import models

# Create your models here.

class Test(models.Model):
    id = 'test'
    password = 'password!'
    username = '테스트'
    date = '2025-01-01 00:00:00'

    def __str__(self):
        return 'id:{}, password:{}, name:{}, date:{}'.format(self.id, self.password, self.username, self.date)

