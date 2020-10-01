import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SelectLanguage = ({data, update}) => {
    const [btnSelected, setBtnSelected] =  useState(0)

    return(
        <View style={styles.btnWrapper}>
            {
                data.map((item, index) => {
                    const code = item.code
                    return(
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            style={btnSelected === index ? styles.btnActive : styles.btnLanguage} 
                            onPress={() => {setBtnSelected(index); update(code)}}
                            key={index}
                        >
                            <Text style={btnSelected === index ? styles.textActive : styles.textLanguage}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const btn = {
    paddingVertical: 3,
    paddingHorizontal: 25,
    borderRadius: 15
}

const styles = StyleSheet.create({
    btnWrapper:{
        flexDirection: 'row',
        marginTop: 10,
        width: '88%',
        justifyContent: 'space-between'
    },
    btnActive:{
        ...btn,
        backgroundColor: '#e15858',
    },
    textActive:{
        color: '#ffffff'
    },
    btnLanguage:{
        ...btn,
        borderColor: '#e15858',
        borderWidth: 1,
    },
    textLanguage:{
        color: '#e15858'
    }
})

export default SelectLanguage
