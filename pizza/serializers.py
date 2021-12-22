from rest_framework import serializers
from .models import Product, Comment


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    size = serializers.SerializerMethodField('get_size')
    comments = serializers.SerializerMethodField('get_comments')

    def get_size(self, obj):
        return {"width": obj.width, 'height': obj.height}

    def get_comments(self, obj):
        comments = []
        all_comments = Comment.objects.all().values()
        for comment in all_comments:
            if comment['product_id'] == obj.id:
                comments.append(comment)
        return comments

    class Meta:
        model = Product
        fields = ('id', 'image_url', 'size', 'price', 'name', 'count', 'weight', 'comments')


class CreatedProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('product','description','date')
