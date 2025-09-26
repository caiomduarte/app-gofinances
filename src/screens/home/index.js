//1 passo - importar os componentes necessarios para contruir a interface
import {View, Text, StyleSheet, Image} from 'react-native';

//2 passo - importar o tema da aplicação
import theme from '../../global/styles/theme';

export default function Home(){
    return(
        <View style={estilos.Container}>
            <View style={estilos.Header}>
                <View style={estilos.TituloWrapper}>
                    <Image source={require('../../../assets/logotipo.png')} 
                           style={estilos.Logotipo}/>

                    <Text style={estilos.Title}>Controle suas finanças de forma muito simples!</Text>
                    <Text style={estilos.SignInTitle}>Faça seu login com uma das contas abaixo</Text>
              </View>
            </View>

            <View style={estilos.Footer}>
                <View style={estilos.FooterWrapper}>

                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    Container:{

    },
    Header:{

    },
    Footer:{

    }
})