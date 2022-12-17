import React, { useState } from 'react'
import { Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ButtonGroup, Paper } from '@mui/material';
import Latihan from './Latihan';
import axios from 'axios';

function Home() {
  const URL = 'https://dunambatam.web.app/'

  const pilihRandom = async (b) => {
      let arr = []
      let e = 0
      let i = 0

      do {
        do {
          e = Math.floor(Math.random() * 20)
        }
        while (arr.includes(e))

        arr.push(e)

        i++

      }

      while (i < b)

      console.log(arr)

      return arr
  }

  const [dialogOpen, setDialogOpen] = useState(false);
  const [kerjainSoal, setKerjainSoal] = useState(false);

  const [random, setRandom] = useState();
  const [pelajaran, setPelajaran] = useState();
  const [soal, setSoal] = useState({});

  const jumlahSoal = [5, 10, 15, 20]
  const mataPelajaran = [
    'ips'
  ]
  

  const clickHandler = (i) => { //called when one of "pelajaran" button clicked
    setPelajaran(i)
    setDialogOpen(true)
    console.log(pelajaran)
  }

  const cancel = () => { //called when the Dialog canceled
    setDialogOpen(false)
  }

  const ambilSoal = async (b) => { // called when the Dialog button (25,50,75,100) clicked 

    console.log(pelajaran)

    setRandom(pilihRandom(b))

    axios.get(URL + "soal/" + pelajaran + ".json").then(res => { setSoal(res.data); })


    setDialogOpen(false)
    setKerjainSoal(true)//jadiin true nanti
  }

  return (
    !kerjainSoal ? // swith kalo misalnya dah pilih pelajaran dan berapa soal jadi pindah ke ngejain soal (dibawah)
      <main>
        <Paper elevation={5}>
          <Box className='button-parent' >
            {mataPelajaran.map(i => (
              <div>
                <Button onClick={() => { clickHandler(i) }} variant="outlined" size='large' color="secondary" >
                  {i}
                </Button>
              </div>
            ))}
          </Box>
          <Dialog open={dialogOpen} onClose={cancel}>
            <DialogTitle>
              Berapa Banyak Soal ?
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Makin banyak ya makin lama
              </DialogContentText>
              <ButtonGroup style={{ width: '100%' }} color='secondary' orientation="vertical" variant="contained" aria-label="mau berapa banyak soalnya?">
                {jumlahSoal.map(i => (
                  <Button onClick={() => ambilSoal(i)}>
                    {i}
                  </Button>
                ))}
              </ButtonGroup>
            </DialogContent>
            <DialogActions>
              <Button variant='outlined' color="secondary" onClick={() => { cancel() }}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </main>
      ://ngerjain soal///////////////////////////////////////////////
      <Latihan random={random} soal={soal} pelajaran={pelajaran} URL={URL} />


  );
}

export default Home