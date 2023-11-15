import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";
import { isDelivery, subtotalOfItems, totalOfItems } from "../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const footer = () => {
    const subtotal = useSelector(subtotalOfItems);
    const delivery = useSelector(isDelivery);
    const total = useSelector(totalOfItems);
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivary</Text>
          <Text style={styles.text}>{delivery} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={footer}
      />
      <Pressable
        onPress={() => console.warn("Checkout")}
        style={styles.cartButton}
      >
        <Text style={styles.cartText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    borderTopColor: "gainsboro",
    borderTopWidth: 1,
    paddingTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  cartButton: {
    position: "absolute",
    padding: 16,
    backgroundColor: "red",
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

export default ShoppingCart;
