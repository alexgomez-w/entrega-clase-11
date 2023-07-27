import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem';
import { useDispatch, useSelector } from "react-redux";
//import { } from "../Features/Counter/counterSlice";

//usar 


const Cart = () => {
    const dispatch = useDispatch()
    const CartData = useSelector(state => state.shopReducer.value.items)

    console.log(CartData)

          // Verificar que cartdata tenga un valor válido antes de usar reduce
          if (!Array.isArray(CartData)) {
            return <div>No hay elementos en el carrito.</div>;
        }

    const total = CartData.reduce((acumulador, currentItem) => acumulador + (currentItem.price * currentItem.quantity), 0);



    return (
    <View style={styles.container}>
        <FlatList
            numColumns={4}
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable>
                <Text>
                    Confirm
                </Text>
            </Pressable>
            <Text>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    }
})