weight = 41.5

#Ground Shipping

if weight <= 2:
  cost_ground = 20 + (weight * 1.5)
elif weight <= 6:
  cost_ground = (weight * 3) + 20.00
elif weight <= 10:
  cost_ground = (weight * 4) + 20.00
else:
  cost_ground = (weight * 4.75) + 20.00

print("Ground Shipping $", cost_ground)

# Ground Shipping Premium

cost_ground_premium = 125.00

print("Ground Shipping Premium $", cost_ground_premium)

# Drone Shipping

if weight <= 2:
  cost_drone_shipping = (weight * 4.5)
elif weight <= 6:
  cost_drone_shipping = (weight * 9)
elif weight <= 10:
  cost_drone_shipping = (weight * 12)
else:
  cost_drone_shipping = (weight * 14.25)

print("Drone Shipping $", cost_drone_shipping)
