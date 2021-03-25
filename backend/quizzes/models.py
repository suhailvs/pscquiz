from django.db import models
from django.contrib.auth.models import User

class Subject(models.Model):
    name = models.CharField(max_length=30)
    color = models.CharField(max_length=7, default='#007bff')

    def __str__(self):
        return self.name

class Quiz(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quizzes')
    name = models.CharField(max_length=255)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='quizzes')

    def __str__(self):
        return self.name


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    text = models.TextField('Question')
    image = models.ImageField(blank=True, upload_to="questions/")

    def __str__(self):
        return self.text


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    text = models.CharField('Answer', max_length=255)
    is_correct = models.BooleanField('Correct answer', default=False)
    image = models.ImageField(blank=True, upload_to="answers/")

    def __str__(self):
    	return self.text

class TakenQuiz(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='taken_quizzes')
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='taken_quizzes')
    score = models.IntegerField()
    percentage = models.FloatField(default=0)
    date = models.DateTimeField(auto_now_add=True)


class UserAnswer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quiz_answers')
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, related_name='+')