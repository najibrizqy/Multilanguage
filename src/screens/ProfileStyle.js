import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    content:{
        flex: 1,
        paddingVertical: 10,
    },
    selectLangunge:{
        fontSize: 15,
        fontWeight: '600',
        opacity: 0.7,
        letterSpacing: 0.8
    },
    profileTitle:{
        marginTop: 30,
        fontSize: 20,
        fontWeight: '700',
        opacity: 0.7,
        letterSpacing: 0.8
    },
    imgWrapper:{
        width: 115,
        height: 200,
        marginTop: 20,
        borderRadius: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#e15858',
        borderRightWidth: 4,
        borderRightColor: '#e15858',
    },
    imgProfile:{
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'contain'
    },
    title:{
        fontSize: 14,
        marginTop: 20,
        fontWeight: '700',
        opacity: 0.7,
        letterSpacing: 0.6
    },
    value:{
        fontSize: 18,
        fontWeight: '600',
        opacity: 0.5,
        letterSpacing: 0.7
    }
});