import { Divider, FormControlLabel, List, ListItem, Radio, RadioGroup, Typography, Button, AppBar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Koreksi(props) {
  const random = props.random;
  const jawabanPeserta = props.jawabanPeserta;
  const soalSorted = props.soalSorted;
  const pelajaran = props.pelajaran;
  const URL = props.URL;

  const [jawaban, setJawaban] = useState([]);
  const statusBackground = {
    benar: '#6ef579',
    salah: '#f56262'
  }

  useEffect(() => {
    const ambilJawabanMenurutRandom = async () => {
      try {
        const res = await axios.get(URL + "jawaban/" + pelajaran + ".json")
        console.log(res.data)
        setJawaban([])
        let i = 0
        do {
          const tempJawaban = res.data.jawaban[random[i]];
          setJawaban((prevState) => ([...prevState, tempJawaban]));
          i++
          continue
        }  while (i < random.length)
      } catch (err) {
        console.log(err)
      }
    }

    ambilJawabanMenurutRandom()
  }, [])

  const Nilai = () => {
    let i = 0;
    let benar = 0;
    let salah = 0;
    do {
      if (Number(jawabanPeserta[i].jawaban) === jawaban[i]){
        benar++
      } else {salah++}
      i++
    } while (i< random.length)

    return (
      <section style={{textAlign: 'center', marginTop: 18, marginBottom: 8}}>
        <Typography variant="h5" color="initial">Nilai : {benar/random.length*100}</Typography>
        <Typography variant="body1" color="initial">Benar : {benar}</Typography>
        <Typography variant="body1" color="initial">Salah : {salah}</Typography>
      </section>
    )
  }
  return (
    <main>
      <AppBar position='static' color='secondary'><Typography variant='h5' align='center' style={{ marginTop: 5, marginBottom: 10 }} >{pelajaran.toUpperCase()}</Typography></AppBar>
      <Nilai />
      <List>
        {soalSorted.map((soal, i) => (
          <div style={{ backgroundColor: Number(jawabanPeserta[i].jawaban) === jawaban[i] ? statusBackground.benar : statusBackground.salah }}>
            <ListItem sx={{ ml: 1 }}>
              <Typography variant='body' sx={{ fontSize: 18 }} key={soal.soal} >{(i + 1 + '.) ') + soal.soal}</Typography>
            </ListItem>
            <ListItem sx={{ ml: 2 }}>
              <RadioGroup
                name={i + 1}
                value={jawabanPeserta[i].jawaban}
              >
                {soal.jawaban.map((jawabanSoal, x) => (
                  <FormControlLabel disabled key={x} value={x + 1} sx={{ mb: 0.5 }} control={<Radio />} label={jawabanSoal} />
                ))}
              </RadioGroup>
            </ListItem>
            <ListItem sx={{ ml: 1 }}>
              <Typography variant='body' sx={{ fontSize: 18, fontWeight: 700}} key={i} >{'Jawaban : '+jawaban[i]}</Typography>
            </ListItem>
            
            <Divider />
          </div>
        ))}
      </List>
    </main>
  )
}

export default Koreksi