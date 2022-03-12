import React, {useState} from 'react';
import {SafeAreaView, TextInput,Text,View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const Info = () => {
    const DATE=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const YEAR=[2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1990,1989,1988,1987,1986,1985]
    const MON =[1,2,3,4,5,6,7,8,9,10,11,12]
    const [open, setOpen] = useState(false);
    const [erm,setErm] = useState(""); //이름
    const [year,setYear]=useState(YEAR);
    const [mon,setMon]=useState(MON);
    const [day,setDay]=useState(DATE);

    return (
        <SafeAreaView>
            <Text> 당신의 이름을 적어주세요! </Text>
            <TextInput
                style={styles.ERM}
                onChangeText={setErm}
                value = {erm}
                placeholder="제갈 원주"
                keyboardType="text"
                closeAfterSelecting={true}
            />s

        <Text> 당신의 생일은? </Text>
            <DropDownPicker
                onPress(() => {
                    setOpen(!setOpen()) }
                {/*if (open === true){  renderListItem={() => {} )*/}

        }
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ERM:{
        height:50,
        margin:10,
        borderWidth:1,
        padding:15,
    },
    birth:{  height:40, margin:10, borderWidth:1, padding:15 },



})

export default Info;