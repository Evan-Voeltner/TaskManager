# Generated by Django 4.1.3 on 2022-12-02 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_instances', '0002_taskinstance_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='taskinstance',
            name='importance',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='taskinstance',
            name='recurring_pattern',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
