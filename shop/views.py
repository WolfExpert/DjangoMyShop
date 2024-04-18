from django.shortcuts import render, get_object_or_404
from cart.forms import CartAddProductForm, CartAddOneProductForm
from .models import Category, Product


def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)

    # Check the current URL path to determine whether to show the section header
    show_section_header = not category_slug  # Show section header if no category_slug

    cart_product_form = CartAddOneProductForm()
    context = {
        'categories': categories,
        'products': products,
        'show_section_header': show_section_header,
        'cart_product_form': cart_product_form,
    }

    return render(request, 'shop/product/list.html', context)


def product_detail(request, id, slug):
    product = get_object_or_404(Product,
                                id=id,
                                slug=slug,
                                available=True)
    cart_product_form = CartAddProductForm()
    return render(request,
                  'shop/product/detail.html',
                  {'product': product,
                   'cart_product_form': cart_product_form})


