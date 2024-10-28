fn calculate_price_of_apples(quantity: i32) -> i32 {
    if quantity > 40 {
        quantity * 1
    } else {
        quantity * 2
    }
}
fn main() {}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn verify_test() {
        assert_eq!(calculate_price_of_apples(35), 70);
        assert_eq!(calculate_price_of_apples(40), 80);
        assert_eq!(calculate_price_of_apples(41), 41);
        assert_eq!(calculate_price_of_apples(65), 65);
    }
}
