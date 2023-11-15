import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

export default ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  // const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
    ToastAndroid.show("Add to Cart", ToastAndroid.SHORT);
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.cartButton}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation Item */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 30,
  },
  cartButton: {
    position: "absolute",
    padding: 16,
    backgroundColor: "black",
    bottom: 30,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  cartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
