inters <- read.csv("intersections.csv")

attach(inters)

v_bins = c(0,10000,20000,30000,99999999)

p_bins = c(0,500,1000,2000,999999)

y_bins = c(1925,1950,1975,2000,2017)

freq = hist(ped_vol, breaks=p_bins)
