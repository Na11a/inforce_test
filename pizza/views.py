from django.shortcuts import render
from .serializers import ProductSerializer,CreatedProductSerializer,CommentSerializer
from rest_framework.views import APIView,Response
from .models import Product,Comment
from django.http import Http404

class ProductList(APIView):


    def get(self,request):
        try:
            min_price = int(request.GET['min_price'])
            print(request)
            products = Product.objects.filter(price__gte = min_price)
        except:
            products = Product.objects.all()
        serializer = ProductSerializer(products,many=True)
        return Response({'products':serializer.data},status=200)

    def post(self,request):
        product = request.data
        serializer = CreatedProductSerializer(data=product)
        if serializer.is_valid():
            product = serializer.save()
            return_product = Product.objects.get(pk=product.id)
            product_serializer = ProductSerializer(return_product)
            return Response(product_serializer.data,status=200)
        return Response(status=500)

class ProductDetail(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self,request,id):
        product =self.get_object(id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self,request,id):
        product = self.get_object(id)
        serializer = CreatedProductSerializer(product,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id, ):
        product = self.get_object(id)
        print(product)
        product.delete()
        return Response(status=204)
class ProductFilterView(APIView):
    def get(self,request):
        price = int(request.GET['min_price'])
        products = Product.objects.filter(price >= price)
        serializer = ProductSerializer(products,many=True)
        return Response({products:serializer.data})

class CommentView(APIView):
    def post(self,request):
        comment = request.data
        serializer = CommentSerializer(data=comment)
        if serializer.is_valid():
            serializer.save()
            return Response(status=200)
        return Response(status=500)
    def get(self,request):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments,many=True)
        return Response(serializer.data)

class CommentDetailView(APIView):
    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404

    def delete(self,request,id):
        comment = self.get_object(id)
        comment.delete()
        return Response(status=204)