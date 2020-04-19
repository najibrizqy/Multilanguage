import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux';

import {updateLanguage} from './../services/actions/language';
import mapStateToProps from './../services/mapStateToProps';
import * as styles from './ProfileStyle';
import img from './../img/jblue.jpg';
import SelectLanguage from './../components/SelectLanguage';

class ProfileScreen extends Component{
    constructor(props){
        super(props)
    }

    _updateLanguage = lang => {
        this.props.dispatch(updateLanguage(lang));
    };
    

    render(){
        console.log(this.props.dispatch)
        const { intlData } = this.props;
        const languages = [
            { code: 'id', name: intlData.text['languageId'] },
            { code: 'en', name: intlData.text['languageEn'] },
            { code: 'kr', name: intlData.text['languageKr'] }
        ];

        return(
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
                <Text style={styles.selectLangunge}>{intlData.text['selectLanguage']}</Text>
                <SelectLanguage data={languages} update={this._updateLanguage} />

                <Text style={styles.profileTitle}>{intlData.text['profile']}</Text>
                <View style={styles.imgWrapper}>
                    <Image source={img} style={styles.imgProfile} />
                </View>

                <Text style={styles.title}>{intlData.text['fullName']}</Text>
                <Text style={styles.value}>Najibullah Rizqy Fathoni</Text>

                <Text style={styles.title}>{intlData.text['nickname']}</Text>
                <Text style={styles.value}>Najib</Text>

                <Text style={styles.title}>{intlData.text['gender']}</Text>
                <Text style={styles.value}>{intlData.text['genderType']}</Text>

                <Text style={styles.title}>{intlData.text['hoby']}</Text>
                <Text style={styles.value}>{intlData.text['hobyValue']}</Text>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(ProfileScreen)
