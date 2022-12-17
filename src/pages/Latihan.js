import React, { useEffect, useState } from 'react'
import { List, Button, ListItem, Divider, RadioGroup, FormControlLabel, Radio, Typography, AppBar, CircularProgress } from '@mui/material';
import Koreksi from './Koreksi';


function Latihan(props) {


    const soal = props.soal.soal;
    const pelajaran = props.pelajaran;
    const [random, setRandom] = useState()
    const randomPromise = Promise.resolve(props.random); //detik ini kamu belum tau fungsinya promise ini, jadi ikutin tutor je lah

    const [soalSorted, setSoalSorted] = useState([])
    const [jawabanPeserta, setJawabanPeserta] = useState(
        [{ id: 1, jawaban: false }, { id: 2, jawaban: false }, { id: 3, jawaban: false }, { id: 4, jawaban: false }, { id: 5, jawaban: false }, { id: 6, jawaban: false }, { id: 7, jawaban: false }, { id: 8, jawaban: false }, { id: 9, jawaban: false }, { id: 10, jawaban: false }, { id: 11, jawaban: false }, { id: 12, jawaban: false }, { id: 13, jawaban: false }, { id: 14, jawaban: false }, { id: 15, jawaban: false }, { id: 16, jawaban: false }, { id: 17, jawaban: false }, { id: 18, jawaban: false }, { id: 19, jawaban: false }, { id: 20, jawaban: false }, { id: 21, jawaban: false }, { id: 22, jawaban: false }, { id: 23, jawaban: false }, { id: 24, jawaban: false }, { id: 25, jawaban: false }, { id: 26, jawaban: false }, { id: 27, jawaban: false }, { id: 28, jawaban: false }, { id: 29, jawaban: false }, { id: 30, jawaban: false }, { id: 31, jawaban: false }, { id: 32, jawaban: false }, { id: 33, jawaban: false }, { id: 34, jawaban: false }, { id: 35, jawaban: false }, { id: 36, jawaban: false }, { id: 37, jawaban: false }, { id: 38, jawaban: false }, { id: 39, jawaban: false }, { id: 40, jawaban: false }, { id: 41, jawaban: false }, { id: 42, jawaban: false }, { id: 43, jawaban: false }, { id: 44, jawaban: false }, { id: 45, jawaban: false }, { id: 46, jawaban: false }, { id: 47, jawaban: false }, { id: 48, jawaban: false }, { id: 49, jawaban: false }, { id: 50, jawaban: false }, { id: 51, jawaban: false }, { id: 52, jawaban: false }, { id: 53, jawaban: false }, { id: 54, jawaban: false }, { id: 55, jawaban: false }, { id: 56, jawaban: false }, { id: 57, jawaban: false }, { id: 58, jawaban: false }, { id: 59, jawaban: false }, { id: 60, jawaban: false }, { id: 61, jawaban: false }, { id: 62, jawaban: false }, { id: 63, jawaban: false }, { id: 64, jawaban: false }, { id: 65, jawaban: false }, { id: 66, jawaban: false }, { id: 67, jawaban: false }, { id: 68, jawaban: false }, { id: 69, jawaban: false }, { id: 70, jawaban: false }, { id: 71, jawaban: false }, { id: 72, jawaban: false }, { id: 73, jawaban: false }, { id: 74, jawaban: false }, { id: 75, jawaban: false }, { id: 76, jawaban: false }, { id: 77, jawaban: false }, { id: 78, jawaban: false }, { id: 79, jawaban: false }, { id: 80, jawaban: false }, { id: 81, jawaban: false }, { id: 82, jawaban: false }, { id: 83, jawaban: false }, { id: 84, jawaban: false }, { id: 85, jawaban: false }, { id: 86, jawaban: false }, { id: 87, jawaban: false }, { id: 88, jawaban: false }, { id: 89, jawaban: false }, { id: 90, jawaban: false }, { id: 91, jawaban: false }, { id: 92, jawaban: false }, { id: 93, jawaban: false }, { id: 94, jawaban: false }, { id: 95, jawaban: false }, { id: 96, jawaban: false }, { id: 97, jawaban: false }, { id: 98, jawaban: false }, { id: 99, jawaban: false }, { id: 100, jawaban: false }]
    )
    const [diIsiSemua, setDiIsiSemua] = useState(false)


    useEffect(() => {

        const ambilSoalMenurutRandom = async () => {
            randomPromise.then((value) => {
                setRandom(value)
                if (soal && random) {
                    let i = 0
                    do {
                        const tempSoal = soal[value[i]]
                        setSoalSorted((prevState) => ([...prevState, tempSoal]))
                        i++
                        continue
                    }
                    while (i < value.length)
                }
            })
        }

        ambilSoalMenurutRandom()


    }, [randomPromise, soal])

    const changeRadioEvent = (e) => {
        const newJawabanPeserta = jawabanPeserta.map(obj => {
            if (obj.id === Number(e.target.name)) {
                console.log('bejaya')
                return { ...obj, jawaban: e.target.value }
            }
            return obj
        })

        setJawabanPeserta(newJawabanPeserta)

        // setJawabanPeserta((prevState) => ([...prevState, jawabanPeserta[Number(e.target.name)].jawaban=e.target.value]))
        // console.log('bejaya... mungkin ?')


    }

    const handleKirim = (r) => {
        for (let i = 1; i < r; i++) {
            setDiIsiSemua(true)
            if (jawabanPeserta[i].jawaban === false) {
                console.log('ada yang kosong laa ' + (i + 1));
                console.log(jawabanPeserta)
                setDiIsiSemua(false)
                break;
            }
        }
    }
    return (
        !diIsiSemua ? <main>
            <AppBar position='static' color='secondary'><Typography variant='h5' align='center' style={{ marginTop: 5, marginBottom: 10 }} >{pelajaran.toUpperCase()}</Typography></AppBar>

            <List>
                {soalSorted.map((soal, i) => (
                    <>
                        <ListItem sx={{ ml: 1 }}>
                            <Typography variant='body' sx={{ fontSize: 18 }} key={soal.soal} >{(i + 1 + '.) ') + soal.soal}</Typography>
                        </ListItem>
                        <ListItem sx={{ ml: 2 }}>
                            <RadioGroup
                                name={i + 1}
                                onChange={changeRadioEvent}
                            >
                                {soal.jawaban.map((jawabanSoal, x) => (
                                    <FormControlLabel key={x} value={x + 1} sx={{ mb: 0.5 }} control={<Radio />} label={jawabanSoal} />
                                ))}
                            </RadioGroup>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>

            { jawabanPeserta[0].jawaban || jawabanPeserta[1].jawaban || jawabanPeserta[2].jawaban || jawabanPeserta[3].jawaban || jawabanPeserta[4].jawaban || jawabanPeserta[5].jawaban || jawabanPeserta[6].jawaban || jawabanPeserta[7].jawaban || jawabanPeserta[8].jawaban || jawabanPeserta[9].jawaban || jawabanPeserta[10].jawaban || jawabanPeserta[11].jawaban || jawabanPeserta[12].jawaban || jawabanPeserta[13].jawaban || jawabanPeserta[14].jawaban || jawabanPeserta[15].jawaban || jawabanPeserta[16].jawaban || jawabanPeserta[17].jawaban || jawabanPeserta[18].jawaban || jawabanPeserta[19].jawaban || jawabanPeserta[20].jawaban || jawabanPeserta[21].jawaban || jawabanPeserta[22].jawaban || jawabanPeserta[23].jawaban || jawabanPeserta[24].jawaban || jawabanPeserta[25].jawaban ? <div style={{ width: '75%', margin: 'auto', marginTop: 10, marginBottom: 25 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    fullWidth
                    onClick={() => { handleKirim(random.length); }}
                >
                    Kirim
                </Button>
            </div> : <div style={{
                paddingTop: 14,
                paddingBottom: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}><CircularProgress color="secondary" disableShrink /></div>}
            
        </main > : <Koreksi random={random} jawabanPeserta={jawabanPeserta} soalSorted={soalSorted} pelajaran={pelajaran} URL={props.URL} />
    )
}

export default Latihan