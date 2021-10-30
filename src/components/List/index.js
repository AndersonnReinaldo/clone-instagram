import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const List = (props) => {
    

        function carregaicone(likeada){
            return likeada ?
            require('../../assets/images/likeada.png') :
            require('../../assets/images/like.png') 
        }

        function mostraLikes(likes){
            console.log(likes)
            if(likes === 0) {
                return
            }

            return(<Text style={styles.likes}>{likes} {likes == 1 ? 'curtida' : 'curtidas'}</Text>)
        }


    return (
        <View >
            <View style={styles.viewPefil}>
                <Image
                 style={styles.fotoPerfil} 
                 source={{uri:props.data.imgperfil}}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>
            <Image
            resizeMode='cover'
            source={{uri:props.data.imgPublicacao}}
            style={styles.fotoPublicacao}
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image 
                    style={styles.iconeLike}
                    source={carregaicone(props.data.likeada)}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                    style={styles.iconeLike}
                    source={require('../../assets/images/comment.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                    style={styles.iconeLike}
                    source={require('../../assets/images/send.png')}
                    />
                </TouchableOpacity>
            </View>
            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>

            <Text style={styles.descRodape}>
                {props.data.descricao}
            </Text>
        </View>
    )
}

export default List

const styles = StyleSheet.create({

    viewPefil:{
        flex: 1,
        alignItems: 'center',
        padding:8,
        flexDirection: 'row',
    },
    areaBtn:{
        flexDirection:'row',
        padding:5
        
    },
    fotoPerfil:{
        width:50,
        height:50,
        borderRadius:25
    },
    nomeUsuario:{
        paddingLeft:5,
        fontSize:20,
        color:'#000'
    },
    fotoPublicacao:{
        height:400,
        alignItems:'center'
    },
    iconeLike:{
        width:30,
        height:30
    },
    btnSend:{
        paddingLeft:5
    },
    likes:{
        fontWeight:'bold',
        marginLeft:5
    },
    nomeRodape:{
        fontWeight:'bold',
        fontSize: 18,
        paddingLeft:5

    },
    descRodape:{
        paddingLeft:5,
        paddingBottom:10,
        fontSize:15

    }


})
