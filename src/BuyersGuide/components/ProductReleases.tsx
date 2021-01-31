import * as moment from 'moment'
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import ProgressBar from './ProgressBar';

interface IProductReleaseProps {
    releases: IReleasesProps[];
    lastReleaseLifetime: number;
    maxLifetime: number;
    averageLifetime: number;
  }
  type IReleasesProps = {
      intro: string,
      productId: string,
      lifetime: number,
  }
  
  
export function ProductReleases({
  releases,
  lastReleaseLifetime,
  maxLifetime,
  averageLifetime,
}: IProductReleaseProps) {


    const color = (() => {
        const dividedValue = lastReleaseLifetime / averageLifetime;
        if (dividedValue <= 0.33) {
            return 'green';
        } else if (dividedValue <= 0.66) {
            return 'yellow';
        } else {
            return 'red';
        }
    })()

    function fromISOtoDate(someISOdate: string): string {
        const newDate = new Date(someISOdate);
        const year = newDate.getFullYear();
        let month = newDate.getMonth()+1;
        return `${month}  ${year}`
    }

  return (
    <div className="releases">
        <div className='releases__last'>
            
            <h2>Days Since Last Release</h2>
            <div>

            </div>
        </div>
        <div className='releases__average'>
            Average: {averageLifetime}
        </div>
        <div className='releases__recent'>
            <h2>Recent releases</h2>
            {releases.map((obj, index) => {
                return (
                    <div>
                        <div className='releases__recent_date'>
                            {fromISOtoDate(obj.intro)}
                        </div>
                        <ProgressBar color={color} maxLifetime={maxLifetime} currentLifetime={obj.lifetime}/>
                        <div>
                            {obj.lifetime}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
