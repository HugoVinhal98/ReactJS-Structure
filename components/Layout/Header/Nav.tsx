import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Grid } from '@material-ui/core'

const Nav: React.FC = () => {
  return (
    <Grid container alignContent="space-between">
      <Grid item>
        <Link href="/">
          <a></a>
        </Link>
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default Nav
